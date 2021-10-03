function deleteClass(el, theClass) {
	for (let i = 0; i < el.length; i++) el[i].classList.remove(theClass);
}
function addClass(el, theClass) {
	for (let i = 0; i < el.length; i++) el[i].classList.add(theClass);
}
function showClass(el, theClass) {
	for (let i = 0; i < el.length; i++) {
		if (el[i].classList.contains(theClass)) el[i].style.display = 'block';
	}
}
function hideExcpectClass(el, theClass) {
	for (let i = 0; i < el.length; i++) {
		if (!el[i].classList.contains(theClass)) el[i].style.display = 'none';
	}
}
// Navbar
{
	let menu = document.querySelector('nav .container .menu'),
		unordredList = document.querySelector('nav .container .links ul'),
		z = 2;
	menu.addEventListener('click', () => {
		if (z % 2 == 0) unordredList.style.display = 'inline-block';
		else unordredList.style.display = 'none';
		z++;
	});
}
// End Navbar

// Header
{
	let header = document.querySelector('header'),
		bullets = document.querySelectorAll('header .bullet span'),
		minusBtn = document.querySelector('header .left'),
		plusBtn = document.querySelector('header .right'),
		i = 0,
		imgs = {
			0: 'imgs/backgrounds/header-1.jpg',
			1: 'imgs/backgrounds/header-2.jpg',
			2: 'imgs/backgrounds/header-3.jpg'
		};
	minusBtn.addEventListener('click', minus);
	plusBtn.addEventListener('click', plus);
	function plus() {
		if (++i == 3) i = 0;
		header.style.backgroundImage = `url(${imgs[i]})`;
		deleteClass(bullets, 'active');
		bullets[i].classList.add('active');
	}
	function minus() {
		if (--i == -1) i = 2;
		header.style.backgroundImage = `url(${imgs[i]})`;
		deleteClass(bullets, 'active');
		bullets[i].classList.add('active');
	}
	for (let j = 0; j < bullets.length; j++) {
		bullets[j].onclick = () => {
			header.style.backgroundImage = `url(${imgs[j]})`;
			deleteClass(bullets, 'active');
			bullets[j].classList.add('active');
			i = j;
		};
	}
	let interval = setInterval(plus, 3000);
	header.onmouseover = (_) => clearInterval(interval);
	header.onmouseout = (_) => (interval = setInterval(plus, 3000));
}
// End Header

// Portfolio
{
	// Start Categories
	let buttons = document.querySelectorAll('.portfolio .buttons button'),
		allBtn = document.querySelectorAll('.portfolio .buttons button')[0],
		appBtn = document.querySelectorAll('.portfolio .buttons button')[1],
		photographyBtn = document.querySelectorAll('.portfolio .buttons button')[2],
		webBtn = document.querySelectorAll('.portfolio .buttons button')[3],
		printBtn = document.querySelectorAll('.portfolio .buttons button')[4];

	function switchBtns(btn) {
		let numPicViewed = document.querySelectorAll('.portfolio .imgs .image'),
			theClass = btn.textContent.toLowerCase();
		hideExcpectClass(numPicViewed, theClass);
		showClass(numPicViewed, theClass);
		deleteClass(buttons, 'active');
		addClass([ btn ], 'active');
	}

	allBtn.addEventListener('click', () => {
		let numPicViewed = document.querySelectorAll('.portfolio .imgs .image');
		for (let i = 0; i < numPicViewed.length; i++) numPicViewed[i].style.display = 'block';
		deleteClass(buttons, 'active');
		addClass([ allBtn ], 'active');
	});

	appBtn.addEventListener('click', () => {
		switchBtns(appBtn);
	});

	photographyBtn.addEventListener('click', () => {
		switchBtns(photographyBtn);
	});

	webBtn.addEventListener('click', () => {
		switchBtns(webBtn);
	});

	printBtn.addEventListener('click', () => {
		switchBtns(printBtn);
	});
	// End Categories
	// Preview More
	let addMore = document.querySelector('.portfolio .special-button'),
		bigDev = document.querySelector('.portfolio .imgs'),
		picData = {
			9: {
				url: 'imgs/portfolio/nine.jpg',
				title: 'Awesome Image',
				category: 'web'
			},
			10: {
				url: 'imgs/portfolio/ten.jpg',
				title: 'Awesome Image',
				category: 'app'
			},
			11: {
				url: 'imgs/portfolio/eleven.jpg',
				title: 'Awesome Image',
				category: 'web'
			},
			12: {
				url: 'imgs/portfolio/twelve.jpg',
				title: 'Awesome Image',
				category: 'print'
			},
			13: {
				url: 'imgs/portfolio/theirteen.jpg',
				title: 'Awesome Image',
				category: 'web'
			},
			14: {
				url: 'imgs/portfolio/fourteen.jpg',
				title: 'Awesome Image',
				category: 'photography'
			},
			15: {
				url: 'imgs/portfolio/fifteen.jpg',
				title: 'Awesome Image',
				category: 'web'
			},
			16: {
				url: 'imgs/portfolio/sixteen.jpg',
				title: 'Awesome Image',
				category: 'app'
			},
			add(num) {
				let image = document.createElement('div');
				image.classList.add('image');
				image.classList.add('all');
				image.classList.add(this[num].category);
				image.innerHTML = `<img src=${this[num].url} alt="Image${num}" />
              <div class="caption">
              <h3>${this[num].title}</h3>
              <p>${this[num].category}</p>
              `;
				bigDev.append(image);
			}
		};
	addMore.addEventListener('click', (_) => {
		let numPicViewed = document.querySelectorAll('.portfolio .imgs .image'),
			numPicViewedLength = numPicViewed.length,
			categoryChoosed = document.querySelector('.portfolio .buttons .active');
		if (numPicViewedLength - 8 != Object.keys(picData).length - 1) {
			for (let i = 0; i < 4; i++) {
				picData.add(numPicViewedLength + 1);
				numPicViewedLength++;
			}
			switchBtns(categoryChoosed);
		} else {
			alert('Soory there no more pictures to preview');
		}
	});
	// End Preview More
}
// End Portfolio
