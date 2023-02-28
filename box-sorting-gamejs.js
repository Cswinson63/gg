const boxes = document.querySelectorAll('.box');
const belt = document.querySelector('.belt');
let score = 0;

function handleBoxClick(event) {
	const box = event.target;
	const boxType = box.getAttribute('data-type');

	if (boxType === 'left') {
		box.style.left = '-200px';
		score++;
	} else if (boxType === 'right') {
		box.style.right = '-200px';
		score++;
	}

	if (score === boxes.length) {
		setTimeout(function() {
			alert('Congratulations! You sorted all the boxes.');
			location.reload();
		}, 1000);
	}
}

boxes.forEach(function(box) {
	box.addEventListener('click', handleBoxClick);
});


