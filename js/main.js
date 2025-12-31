// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', ()=>{
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', e=>{
			const href = a.getAttribute('href');
			if(href.startsWith('#') && href.length>1){
				e.preventDefault();
				const el = document.querySelector(href);
				if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
			}
		})
	})

	// Project modal
	const modal = document.getElementById('project-modal');
	const modalTitle = document.getElementById('modal-title');
	const modalDesc = document.getElementById('modal-desc');
	const modalTech = document.getElementById('modal-tech');
	const modalCode = document.getElementById('modal-code');

	function openModal(data){
		modalTitle.textContent = data.title;
		modalDesc.textContent = data.desc;
		modalTech.textContent = data.tech;
		modalCode.href = data.code || '#';
		modal.setAttribute('aria-hidden','false');
	}

	function closeModal(){
		modal.setAttribute('aria-hidden','true');
	}

	document.querySelectorAll('.project-card').forEach(card=>{
		card.addEventListener('click', ()=>{
			const data = {
				title: card.dataset.title || card.querySelector('h3').textContent,
				desc: card.dataset.desc || '',
				tech: card.dataset.tech || '',
				code: JSON.parse(card.dataset.links || '{}').code || ''
			}
			openModal(data);
		})
	})

	modal.querySelector('.modal-close').addEventListener('click', closeModal);
	modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });
	document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

	console.log('互動已啟用');
});
