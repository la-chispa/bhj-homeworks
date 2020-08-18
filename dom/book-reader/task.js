'use strict';
const fontSizeBtns = Array.from(document.getElementsByClassName('font-size'));
const colorBtns = Array.from(document.querySelector('.book__control_color').getElementsByClassName('color'));
const backgroundBtns = Array.from(document.querySelector('.book__control_background').getElementsByClassName('color'));
const book = document.getElementById('book');

for (let btn of fontSizeBtns) {
	btn.onclick = function() {
		if (this.classList.contains('font-size_active')) {
			return false;
		}

		fontSizeBtns.find(i => i.classList.contains('font-size_active')).classList.remove('font-size_active');
		this.classList.add('font-size_active');

		if (this.classList.contains('font-size_small')) {
			book.classList.add('book_fs-small');
			book.classList.remove('book_fs-big');
		} else if (this.classList.contains('font-size_big')) {
			book.classList.add('book_fs-big');
			book.classList.remove('book_fs-small');			
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}

		return false;
	}
}

for (let btn of colorBtns) {
	btn.onclick = function() {
		if (this.classList.contains('color_active')) {
			return false;
		}

		colorBtns.find(i => i.classList.contains('color_active')).classList.remove('color_active');
		this.classList.add('color_active');

		if (this.classList.contains('color_gray')) {
			book.classList.add('book_color-gray');
			book.classList.remove('book_color-whitesmoke');
		} else if (this.classList.contains('color_whitesmoke')) {
			book.classList.add('book_color-whitesmoke');
			book.classList.remove('book_color-gray');
		} else {
			book.classList.remove('book_color-whitesmoke');
			book.classList.remove('book_color-gray');
		}

		return false;
	}
}

for (let btn of backgroundBtns) {
	btn.onclick = function() {
		if (this.classList.contains('color_active')) {
			return false;
		}

		backgroundBtns.find(i => i.classList.contains('color_active')).classList.remove('color_active');
		this.classList.add('color_active');

		if (this.classList.contains('color_gray')) {
			book.classList.add('book_bg-gray');
			book.classList.remove('book_bg-black');
		} else if (this.classList.contains('color_black')) {
			book.classList.add('book_bg-black');
			book.classList.remove('book_bg-gray');
		} else {
			book.classList.remove('book_bg-black');
			book.classList.remove('book_bg-gray');
		}

		return false;
	}
}