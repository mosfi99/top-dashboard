// get the modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('modalCaption');

// get all image containers
const imageContainers = document.querySelectorAll('.art-card__image-container');

// add click event to each image
imageContainers.forEach((container) => {
	const img = container.querySelector('img');
	container.addEventListener('click', () => {
		modal.style.display = 'block';
		modalImg.src = img.src;
		captionText.innerHTML = img.alt;
	});
});

// get the close button
const closeBtn = document.querySelector('.modal__close');

// close the modal when:
// - clicking on X
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

// - clicking outside the image
modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
});

// - with escape key
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && modal.style.display === 'block') {
		modal.style.display = 'none';
	}
});
