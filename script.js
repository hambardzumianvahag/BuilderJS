let tabs = document.querySelectorAll('ul.tabs li');

tabs.forEach(function (tab) {
	tab.addEventListener('click', function () {
		let tab_id = this.getAttribute('data-tab');

		tabs.forEach(function (tab) {
			tab.classList.remove('current');
		});

		let tabContents = document.querySelectorAll('.tab-content');
		tabContents.forEach(function (content) {
			content.classList.remove('current');
		});

		this.classList.add('current');
		document.getElementById(tab_id).classList.add('current');
	});
});
let elemDiv = document.querySelector('#tab-1')
let styleBtn = document.querySelector('#style-btn')
let elemBtn = document.querySelector('#elem-btn')
let styleTab = document.querySelector('#tab-2')
let btns = document.querySelectorAll('.filt-button')
btns.forEach((item) => {
	item.addEventListener('click', () => {
		elemBtn.style.background = '#f1f1f1'
		styleBtn.style.background = '#ccc'
		elemDiv.style.display = 'none'
		styleTab.style.display = 'block'
		styleBtn.className += ' active'
	})
})

let saveBtn = document.querySelector('.save')
saveBtn.addEventListener('click', () => {
	elemBtn.style.background = '#ccc'
	styleBtn.style.background = '#f1f1f1'
	elemDiv.style.display = 'block'
	styleTab.style.display = 'none'
	elemBtn.className += ' active'
})