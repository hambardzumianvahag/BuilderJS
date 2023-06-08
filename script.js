function openCity(evt, btnName) {
	// Get all elements with class="tabcontent" and hide them
	let tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	let tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(btnName).style.display = "block";
	evt.currentTarget.className += " active";
}
let elemDiv = document.querySelector('#elements')
let styleBtn = document.querySelector('#style-btn')
let elemBtn = document.querySelector('#elem-btn')
let styleTab = document.querySelector('#style')
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