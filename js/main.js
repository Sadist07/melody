(function () {
	const template = document.querySelector('#templates').content;
	const app = document.querySelector('.app');
	console.log(typeof template);
	const sectArray = [].slice.call(template.querySelectorAll('section.main'));
	console.log(sectArray);

	const showTemplate = (index) => {
		let curentScreen = app.querySelector('.main');
		app.replaceChild(sectArray[index], curentScreen);
	};
	
})();