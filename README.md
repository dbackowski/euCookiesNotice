# EUCookiesNotice

Simple javascript library for display EU cookies law notice (requires: jQuery, js-cookie).

![screenshot](http://i.imgur.com/LPUwAzZ.png)


## Example usage 

```javascript
$(document).ready(function() {
  euCookiesNotice.init();
});
```

```javascript
$(document).ready(function() {
  euCookiesNotice.init({ text: 'To jest komunikat', buttonText: 'OK' });
});
```

## Options

* text - text to display on notice (default: ''Ta strona korzysta z ciasteczek. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.')
* buttonText - text to display on notice close button (default: 'Zamknij')

## License

Released under the MIT License.