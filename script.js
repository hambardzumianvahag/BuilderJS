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
	item.addEventListener('click', (e) => {
		elemBtn.style.background = '#f1f1f1'
		styleBtn.style.background = '#ccc'
		elemDiv.style.display = 'none'
		styleTab.style.display = 'block'
		styleBtn.className += ' active'
	})
})
let headerStyle = `<p class="buil-filt-text">BUILDER FILTERS</p>
<div class="create-atribute-box">
<button class="create-header">Header</button>
<hr>
<p class="atribute-box-text">Header</p>
<input type="text" placeholder="Type your text... " class="your-text">
<hr>
<p class="atribute-box-text">Flex - Text</p>
<div class="create-box-button-parent">
<button class="creat-box-button start">Start</button>
<button class="creat-box-button center">Center</button>
	<button class="creat-box-button end">End</button>
	</div>
	<hr>
	<p class="atribute-box-text">Margin</p>
	<div class="margin-box-property">
	<div class="margin-property">
	<input type="text" placeholder="Margin Top" class="margin-input">
		<input type="text" placeholder="Margin Right" class="margin-input">
		<input type="text" placeholder="Margin Bottom" class="margin-input">
		<input type="text" placeholder="Margin Left" class="margin-input">
		</div>
</div>
</div>`
const messages = {
	Header: headerStyle,
	Button: 'bbbb',
	Logo: 'cccc',
	Section: 'gggg',
	Text: 'dddd',
	Image: 'eeee'
};

function printmessage(e) {
	const targetText = e.target.innerHTML;

	if (messages.hasOwnProperty(targetText)) {
		const message = messages[targetText];
		let styleContent = document.querySelector('.style-content');
		styleContent.innerHTML = message;
		delete messages[targetText];
	}
	else if (targetText === 'Header') {
		let styleContent = document.querySelector('.style-content');
		styleContent.innerHTML = headerStyle;
	}
}
btns.forEach((item) => {
	item.addEventListener('click', printmessage)
})

let saveBtn = document.querySelector('.save')
saveBtn.addEventListener('click', () => {
	elemBtn.style.background = '#ccc'
	styleBtn.style.background = '#f1f1f1'
	elemDiv.style.display = 'block'
	styleTab.style.display = 'none'
	elemBtn.className += ' active'
})