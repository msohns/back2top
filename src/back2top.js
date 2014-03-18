(function($) {

	$.fn.back2top = function(settings) {

		// Settings Default
		var config = {
			'speed': 1000,
			'fadeSpeed': 200,
			'content': 'Back to Top',
			'icon': true,
			'theme': 3
		};
		if (settings) {
			$.extend(config, settings);
		}

		// Plugin
		this.each(function() {
			// Definde Object
			var obj = this;

			// Set Button Text
			$(obj).html(config.content);

			// Prepend Up Arrow in fornt of Text
			if (config.icon) {
				$(this).prepend('<b>&#x21e7;</b>&nbsp;');
			};

			// Set Default CSS Settings
			$(obj).css({
				position: 'fixed',
				bottom: '10px',
				right: '10px',
				padding: '10px',
				'text-align': 'center',
				display: 'none',
				cursor: 'pointer'
			});


			// Theme Switcher
			switch (config.theme) {
				case 1:
					$(obj).css({
						'background-color': 'rgba(219, 219, 219, 0.85)',
						'text-align': 'center',
						'border-radius': '50px',
						'box-shadow': 'rgb(87, 87, 87) 0px 0px 20px',
						color: '#666666'
					});
					break;
				case 2:
					$(obj).css({
						'background-color': 'gray',
						'text-align': 'center',
						color: 'white'
					});
					break;
				case 3:
					$(obj).css({
						'background': 'linear-gradient(to left, #3276b1, #285e8e)',
						'text-align': 'center',
						color: 'white',
						right:'0px',
						'box-shadow': 'rgb(87, 87, 87) -5px 0px 10px'
					});
					break;
			}

			// Check if Windows is scrolled. If Window is not at top display Button
			$(window).scroll(function() {
				if ($(window).scrollTop() != 0) {
					$(obj).fadeIn(config.fadeSpeed);
				} else {
					$(obj).fadeOut(config.fadeSpeed);
				}
			});

			// If button is clicked, scroll back to top
			$(this).click(function(event) {
				$('html, body').animate({
					scrollTop: 0
				}, config.speed, 'swing');
			});

		});
	}
}(jQuery));