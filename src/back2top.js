(function($) {

	$.fn.back2top = function(settings) {

// Settings Default
        var config = {
            'speed': 2000,
            'fadeSpeed': 200,
            'content' : 'Back to Top',
            'icon' : false
        };
        if ( settings ){$.extend(config, settings);}

// Plugin
		this.each(function() {
			var obj = this;
			// $(this).text("Back to Top");
			$(this).css({
				position: 'fixed',
				bottom: '10px',
				right: '10px',
				padding: '10px',
				'background-color': 'rgba(219, 219, 219, 0.85)',
				'text-align': 'center',
				'border-radius': '50px',
				'box-shadow': 'rgb(87, 87, 87) 0px 0px 20px',
				display: 'none',
				color: '#666666',
				cursor: 'pointer'
			});

			$(this).html(config.content);
			s

			if (config.icon) {
				$(this).prepend('<b>&#x21e7;</b>&nbsp;');
			};

			$(this).click(function(event) {
				$('html, body').animate({
					scrollTop: 0
				}, config.speed,'swing');
			});

			$(window).scroll(function() {
				if ($(window).scrollTop() != 0) {
					$(obj).fadeIn(config.fadeSpeed);
				} else {
					$(obj ).fadeOut(config.fadeSpeed);
				}
			});
		});
	}
}(jQuery));