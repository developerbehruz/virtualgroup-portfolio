let contactForm = document.querySelector('.contactForm'),
	contactBtn = document.querySelector('.contactBtn'),
	msgCon = document.querySelector('.msgCon');

	console.log(8768);

contactReq = new XMLHttpRequest();
contactReq.open('POST', '../assets/php/?do=sendMessageContact');

contactBtn.addEventListener('click', (e) => {
	e.preventDefault();

	contactReq.addEventListener('load', () => {
		if (contactReq.status === 200) {
			data = JSON.parse(contactReq.response);
			if (data.ok === true && data.code === 200) {
				msgCon.innerHTML = `<h5 style="color: green;">Muvoffaqiyatli yuborildi!</h5>`;
			}else{
				msgCon.innerHTML = `<h5 style="color: green;">${data.message}</h5>`;
			}
		}
	});
	setTimeout(() => {
		msgCon.innerHTML = "";
	}, 2000);
	let formData = new FormData(contactForm);
	contactReq.send(formData);
});
