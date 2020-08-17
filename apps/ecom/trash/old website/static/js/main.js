/* eslint-env browser, jquery */

window.sk=window.sk||function(){(sk.q=sk.q||[]).push(arguments)};

(() => {


	const form = $('#feedback-form');

	// Include all the existing search params
	for (const [key, value] of params) {
		if (key === 'nameField') {
			form.find('[name="name"]').val(value);
			continue;
		}

		if (key === 'emailField') {
			form.find('[name="email"]').val(value);
			continue;
		}

		if (key === 'messageField') {
			form.find('[name="message"]').val(value).get(0).setSelectionRange(0, 0);
			continue;
		}

		if (key === 'extraInfo') {
			form.append(
				$(`<textarea style="display:none" readonly name="${key}"></textarea>`).text(value)
			);
			continue;
		}

		form.append(
			$(`<input type="hidden" name="${key}">`).val(value)
		);
	}

	const getSubject = () => {
		// Note: Intentionally not using template strings
		// here as CloudFlare removes space inside them...
		const product = params.has('product') ? (': ' + params.get('product')) : '';
		const message = form.find('[name="message"]').val().slice(0, 100);
		return 'Feedback' + product + ' - ' + message;
	};

	sk('form', '#feedback-form', {
		id: '374a60e0f07a',
		data: {
			_subject: getSubject
		},
		onSuccess() {
			$('#main').html('<h1 class="title is-2">Thanks for the feedback!</h1><p>You will now be redirected to my website.');

			setTimeout(() => {
				window.location.href = 'https://www.decathlon.in';
			}, 3000);
		}
	});
})();

// For the imported navbar
(() => {
	// Burger menu toggle
	$(document).on('click', '.navbar-burger', () => {
		$('.navbar-burger, .navbar-menu').toggleClass('is-active');
	});
})();
