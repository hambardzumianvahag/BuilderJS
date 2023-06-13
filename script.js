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
let headerStyle = `
<div class="create-atribute-box">
<button class="create-header">Header</button>
<hr>
<p class="atribute-box-text">Header</p>
<input type="text" placeholder="Type your text... " class="your-header">
<hr>
<p class="atribute-box-text">Flex - Text</p>
<div class="create-box-button-parent">
<button class="header-creat-box-button start">Start</button>
<button class="header-creat-box-button center">Center</button>
	<button class="header-creat-box-button end">End</button>
	</div>
	<hr>
	<p class="atribute-box-text">Font Size</p>
	<input type="text" placeholder="Font Size" class="header-font-size">
	<hr>
	<p class="atribute-box-text">Margin</p>
	<div class="margin-box-property">
	<div class="margin-property">
	<input type="text" placeholder="Margin Top" class="header-margin">
		<input type="text" placeholder="Margin Right" class="header-margin">
		<input type="text" placeholder="Margin Bottom" class="header-margin">
		<input type="text" placeholder="Margin Left" class="header-margin">
		</div>
</div>
</div>`
let buttonStyle = `
<div class="create-atribute-box">
<button class="create-header">Button</button>
<hr>
<p class="atribute-box-text">Button</p>
<input type="text" placeholder="Type your text... " class="your-button">
<hr>
<p class="atribute-box-text">Flex - Text</p>
<div class="create-box-button-parent">
<button class="button-creat-box-button start">Start</button>
<button class="button-creat-box-button center">Center</button>
	<button class="button-creat-box-button end">End</button>
	</div>
	<hr>
	<label class='atribute-box-text'>Background</label>
	<input class='color-input' type='color'>
	<hr>
	<p class="atribute-box-text">Font Size</p>
	<input type="text" placeholder="Font Size" class="button-font-size">
	<hr>
	<p class="atribute-box-text">Margin</p>
	<div class="margin-box-property">
	<div class="margin-property">
	<input type="text" placeholder="Margin Top" class="button-margin">
		<input type="text" placeholder="Margin Right" class="button-margin">
		<input type="text" placeholder="Margin Bottom" class="button-margin">
		<input type="text" placeholder="Margin Left" class="button-margin">
		</div>
</div>
</div>`
let textStyle = `
<div class="create-atribute-box">
<button class="create-header">Text Area</button>
<hr>
<p class="atribute-box-text">Text</p>
<textarea class='your-text' placeholder='Type your text'></textarea>
<hr>
<p class="atribute-box-text">Flex - Text</p>
<div class="create-box-button-parent">
<button class="text-creat-box-button start">Start</button>
<button class="text-creat-box-button center">Center</button>
	<button class="text-creat-box-button end">End</button>
	</div>
	<hr>
	<p class="atribute-box-text">Font Size</p>
	<input type="text" placeholder="Font Size" class="text-font-size">
	<hr>
	<p class="atribute-box-text">Margin</p>
	<div class="margin-box-property">
	<div class="margin-property">
	<input type="text" placeholder="Margin Top" class="text-margin">
		<input type="text" placeholder="Margin Right" class="text-margin">
		<input type="text" placeholder="Margin Bottom" class="text-margin">
		<input type="text" placeholder="Margin Left" class="text-margin">
		</div>
</div>
</div>`
let imageStyle = `
<div class="create-atribute-box">
<button class="create-header">Image</button>
<hr>
<p class="atribute-box-text">Image</p>
<input type="text" placeholder="Write URL of image" class="your-image">
<hr>
	<p class="atribute-box-text">Padding</p>
	<div class="margin-box-property">
	<div class="margin-property">
	<input type="text" placeholder="Padding Top" class="image-padding">
		<input type="text" placeholder="Padding Right" class="image-padding">
		<input type="text" placeholder="Padding Bottom" class="image-padding">
		<input type="text" placeholder="Padding Left" class="image-padding">
		</div>
</div>
</div>`
const messages = {
	Header: headerStyle,
	Button: buttonStyle,
	Text: textStyle,
	Image: imageStyle
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

		///header

		function createHeader() {
			let inp = document.querySelector('.your-header')
			let h1 = document.querySelector('.h1-value')
			let fontsSize = document.querySelector('.header-font-size')

			let margin = document.querySelectorAll('.header-margin')
			margin.forEach((item) => {
				item.addEventListener('input', (e) => {
					if (e.target.placeholder == 'Margin Top') {
						h1.style.marginTop = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Bottom') {
						h1.style.marginBottom = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Left') {
						h1.style.marginLeft = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Right') {
						h1.style.marginRight = `${e.target.value}px`
					}
				})
			})
			fontsSize.addEventListener('input', (e) => {
				let count = e.target.value
				h1.style.fontSize = `${count}px`
			})

			inp.addEventListener('input', (e) => {
				h1.innerText = e.target.value
			})
			let flex = document.querySelectorAll('.header-creat-box-button')
			flex.forEach(item => {
				item.addEventListener('click', (e) => {
					if (e.target.innerText == 'Start') {
						h1.style.justifyContent = 'start'
					} else if (e.target.innerText == 'Center') {
						h1.style.justifyContent = 'center'
					} else if (e.target.innerText == 'End') {
						h1.style.justifyContent = 'end'
					}
				})
			})
		}
		createHeader()

	}

	else if (targetText === 'Button') {
		let styleContent = document.querySelector('.style-content');
		styleContent.innerHTML = buttonStyle;

		///button

		function createButton() {
			let button = document.querySelector('.build')
			let inp = document.querySelector('.your-button')
			let fontsSize = document.querySelector('.button-font-size')
			let margin = document.querySelectorAll('.button-margin')
			let color = document.querySelector('.color-input')
			margin.forEach((item) => {
				item.addEventListener('input', (e) => {
					if (e.target.placeholder == 'Margin Top') {
						button.style.marginTop = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Bottom') {
						button.style.marginBottom = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Left') {
						button.style.marginLeft = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Right') {
						button.style.marginRight = `${e.target.value}px`
					}
				})
			})
			color.addEventListener('input', (e) => {
				button.style.background = `${e.target.value}`
			})
			fontsSize.addEventListener('input', (e) => {
				let count = e.target.value
				button.style.fontSize = `${count}px`
			})

			inp.addEventListener('input', (e) => {
				button.innerText = e.target.value
			})
			let flex = document.querySelectorAll('.button-creat-box-button')
			flex.forEach(item => {
				item.addEventListener('click', (e) => {
					if (e.target.innerText == 'Start') {
						button.style.justifyContent = 'start'
					} else if (e.target.innerText == 'Center') {
						button.style.justifyContent = 'center'
					} else if (e.target.innerText == 'End') {
						button.style.justifyContent = 'end'
					}
				})
			})
		}
		createButton()


	}
	else if (targetText === 'Text') {
		let styleContent = document.querySelector('.style-content');
		styleContent.innerHTML = textStyle;

		/// textarea

		function createText() {
			let textValue = document.querySelector('.p-value')
			let inp = document.querySelector('.your-text')
			let fontsSize = document.querySelector('.text-font-size')
			let margin = document.querySelectorAll('.text-margin')
			margin.forEach((item) => {
				item.addEventListener('input', (e) => {
					if (e.target.placeholder == 'Margin Top') {
						textValue.style.marginTop = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Bottom') {
						textValue.style.marginBottom = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Left') {
						textValue.style.marginLeft = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Margin Right') {
						textValue.style.marginRight = `${e.target.value}px`
					}
				})
			})
			fontsSize.addEventListener('input', (e) => {
				let count = e.target.value
				textValue.style.fontSize = `${count}px`
			})

			inp.addEventListener('input', (e) => {
				textValue.innerText = e.target.value
			})
			
			let flex = document.querySelectorAll('.text-creat-box-button')
			flex.forEach(item => {
				item.addEventListener('click', (e) => {
					if (e.target.innerText == 'Start') {
						textValue.style.justifyContent = 'start'
					} else if (e.target.innerText == 'Center') {
						textValue.style.justifyContent = 'center'
					} else if (e.target.innerText == 'End') {
						textValue.style.justifyContent = 'end'
					}
				})
			})
		}
		createText()
	}
	else if (targetText === 'Image') {
		let styleContent = document.querySelector('.style-content');
		styleContent.innerHTML = imageStyle;

		///image

		function createImage() {
			let rightSection = document.querySelector('.right-main')
			let margin = document.querySelectorAll('.image-padding')
			let inp = document.querySelector('.your-image')
			console.log('aaaa')
			margin.forEach((item) => {
				item.addEventListener('input', (e) => {
					if (e.target.placeholder == 'Padding Top') {
						rightSection.style.paddingTop = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Padding Bottom') {
						rightSection.style.paddingBottom = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Padding Left') {
						rightSection.style.paddingLeft = `${e.target.value}px`
					}
					if (e.target.placeholder == 'Padding Right') {
						rightSection.style.paddingRight = `${e.target.value}px`
					}
				})
			})
			inp.addEventListener('input', (e) => {
				rightSection.style.backgroundImage = `url('${e.target.value}')`
			})

		}
		createImage()
	}
}

btns.forEach((item) => {
	item.addEventListener('click', printmessage)
})

let saveBtn = document.querySelector('.save')
saveBtn.classList.add('filt-button')
saveBtn.style.margin = '0 auto'
saveBtn.style.display = 'flex'

saveBtn.addEventListener('click', () => {
	elemBtn.style.background = '#ccc'
	styleBtn.style.background = '#f1f1f1'
	elemDiv.style.display = 'block'
	styleTab.style.display = 'none'
	elemBtn.className += ' active'
})