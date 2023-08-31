'use strict';

const slideContainer = document.querySelectorAll('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

slideContainer.forEach((sd) => {
	const indicatorContainer = document.querySelector(
		'.slide-indicator-container'
	);
	[...sd.children]
		.filter((e) => e.classList.contains('slide'))
		.forEach((slide, index) => {
			slide.style.transform = `translateX(${index * 100}%)`;
			if (indicatorContainer) {
				let indicator = document.createElement('div');
				indicator.classList.add('slide-indicator');
				indicator.dataset.target = index;
				indicatorContainer.appendChild(indicator);
			}
		});
	const indicator = document.querySelectorAll('.slide-indicator');
	let curSlide = 0,
		maxSlide = slides.length;

	const gotoSlide = (slideNo) => {
		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${(index - slideNo) * 100}%)`;
		});
	};

	prevBtn &&
		prevBtn.addEventListener('click', (e) => {
			e.preventDefault();
			curSlide--;
			if (curSlide < 0) curSlide = maxSlide - 1;
			gotoSlide(curSlide);
		});

	nextBtn &&
		nextBtn.addEventListener('click', (e) => {
			e.preventDefault();
			curSlide++;
			if (curSlide > maxSlide - 1) curSlide = 0;
			gotoSlide(curSlide);
		});

	if (indicator) {
		indicator.forEach((ind, index) => {
			if (index == 0) ind.classList.add('active-indicator');
			ind.addEventListener('click', (e) => {
				gotoSlide(e.target.dataset.target);
				indicator.forEach((i) => i.classList.remove('active-indicator'));
				e.target.classList.add('active-indicator');
			});
		});
	}
});

const fdInpts = document.querySelectorAll('.feedback-input');

document.addEventListener('click', (e) => {
	// console.log(e.target);
	fdInpts.forEach((fd) => {
		if (fd.children[1] === document.activeElement || fd.children[1].value != '')
			fd.children[0].classList.add('change-position');
		else if (
			fd.children[1] !== document.activeElement ||
			fd.children[1].value == ''
		) {
			fd.children[0].classList.remove('change-position');
		}
		if (e.target === fd.children[0] || e.target === fd) {
			fd.children[1].focus();
		}
	});
});

fdInpts.forEach((fd) => {
	fd.children[1].addEventListener('focus', (e) => {
		fd.children[0].classList.add('change-position');
		if (fd.children[1] === document.activeElement || fd.children[1].value != '')
			fd.children[0].classList.add('change-position');
		else if (
			fd.children[1] !== document.activeElement ||
			fd.children[1].value == ''
		) {
			fd.children[0].classList.remove('change-position');
		}
	});
});

const tabDetails = document.querySelectorAll('.tab-details');
const tabs = document.querySelectorAll('.tab');

tabs.forEach((t) => {
	t.addEventListener('click', (e) => {
		e.preventDefault();
		tabs.forEach((t) => t.classList.remove('active-tab'));
		e.target.classList.add('active-tab');
		tabDetails.forEach((tb) => {
			tb.classList.add('hidden');
			if (tb.id === e.target.dataset.target) tb.classList.remove('hidden');
		});
	});
});
