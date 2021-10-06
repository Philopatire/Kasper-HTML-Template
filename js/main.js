function deleteClass(els, theClass) {
	els.forEach((el) => {
		el.classList.remove(theClass);
	});
}
function showClass(els, theClass) {
	els.forEach((el) => {
		if (el.classList.contains(theClass)) el.style.display = '';
		else el.style.display = 'none';
		console.log(theClass);
	});
}
// Navbar
{
	let menu = document.querySelector('nav .container .menu'),
		linksList = document.querySelector('nav .container .links ul');

	menu.addEventListener('click', () => {
		if (linksList.style.display == 'inline-block') {
			linksList.style.display = '';
		} else {
			linksList.style.display = 'inline-block';
		}
	});
}
// End Navbar

// Header
{
	let header = document.querySelector('header'),
		imgs = document.querySelectorAll('header .slider img'),
		bullets = document.querySelectorAll('header .bullet span'),
		minusBtn = document.querySelector('header .left'),
		plusBtn = document.querySelector('header .right'),
		i = 0;
	minusBtn.addEventListener('click', () => plusMinus('minus'));
	plusBtn.addEventListener('click', () => plusMinus('plus'));
	function plusMinus(value) {
		if (value == 'plus') {
			if (++i == imgs.length) i = 0;
		} else if (value == 'minus') {
			if (--i == -1) i = imgs.length - 1;
		}
		deleteClass(bullets, 'active');
		deleteClass(imgs, 'active');
		bullets[i].classList.add('active');
		imgs[i].classList.add('active');
	}
	for (let j = 0; j < bullets.length; j++) {
		bullets[j].onclick = () => {
			deleteClass(bullets, 'active');
			deleteClass(imgs, 'active');
			bullets[j].classList.add('active');
			imgs[j].classList.add('active');
			i = j;
		};
	}
	let interval = setInterval(() => plusMinus('plus'), 3000);
	header.onmouseover = () => clearInterval(interval);
	header.onmouseout = () => {
		interval = setInterval(() => plusMinus('plus'), 3000);
		setInterval(interval);
	};
}
// End Header

// Portfolio
{
	// Start Shuffle
	let buttons = document.querySelectorAll('.portfolio .buttons button'),
		imgs = document.querySelectorAll('.portfolio .imgs .image');
	buttons.forEach((btn) => {
		btn.onclick = () => {
			let shuffleValue = btn.getAttribute('data-shuffle');
			if (shuffleValue != 'all') {
				showClass(imgs, shuffleValue);
			} else {
				imgs.forEach((img) => (img.style.display = ''));
			}
		};
	});
	// End Shuffle
	// Preview More
	let moreBtn = document.querySelector('.portfolio .special-button');
	let firstHiddenImgs = document.querySelectorAll('.portfolio .imgs .image.hidden');
	moreBtn.onclick = () => {
		let hiddenImgs = document.querySelectorAll('.portfolio .imgs .image.hidden');
		let preview = moreBtn.getAttribute('data-preview');
		if (preview == 'more') {
			for (let i = 0; i < 3; i++) {
				if (i >= hiddenImgs.length) {
					alert('Sorry no more images to preview');
					moreBtn.textContent = 'Less';
					moreBtn.setAttribute('data-preview', 'less');
					break;
				}
				hiddenImgs[i].classList.remove('hidden');
			}
		} else if (preview == 'less') {
			firstHiddenImgs.forEach((img) => img.classList.add('hidden'));
			moreBtn.textContent = 'More';
			moreBtn.setAttribute('data-preview', 'more');
		}
	};
	// End Preview More
}
// End Portfolio
