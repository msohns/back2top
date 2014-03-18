back2top
========

jQuery Plugin to scroll back to top of the page


Description
========

This Plugin adds a small button to the bottom right corner of your page. The buttons lets you scroll back to the top. 

HowTo
========

Just add a  
```html
<div id="back2top"></div> 
```
to the bottom or top of your page. 

Then just call 
```javascript
  $('#back2top').back2top();
```
and you are all set.

Or if you need more options, call it like this.

```javascript
	$('#backTop').back2top({
		'speed':1000, 
		'fadeSpeed': 200,
		'content' : 'Custom Text',
		'icon' : true,
        'theme' : 1
	});
```

Options 
=========

- speed : Set the scrolling speed 
- fadeSpeed : Set the speed of the FadeIn and FadeOut of the Button
- icon (true / flase) : Set to True to display a small up arrow
- content : change the displayed text. Displays "Back to top" if nothing else is set.

Themes
=========

![alt tag](https://raw.github.com/msohns/back2top/tree/master/themes/Theme-1.png)

![alt tag](https://raw.github.com/msohns/back2top/tree/master/themes/Theme-2.png)

![alt tag](https://raw.github.com/msohns/back2top/tree/master/themes/Theme-3.png)
