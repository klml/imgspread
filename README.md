imgspread
=========

imgspread spreads a thumbnail to a bigger image inside the text and pans the surrounding or beneath text.

[Demo](https://klml.github.io/imgspread/) and kind a [Gallery](https://klml.github.io/imgspread/gallery.html).

Imho an unobtrusive alternative to [modal window](https://en.wikipedia.org/wiki/Modal_window) like [fancyboxing](https://fancybox.net).

## Usage

```
<script src="https://cdn.jsdelivr.net/gh/klml/imgspread@latest/imgspread.js" type="text/javascript"></script>
<script type="text/javascript">
    window.addEventListener("load", function () {
        imgspread("");
    });
</script>
```

Use custom CSS-class:

```
<script src="https://cdn.jsdelivr.net/gh/klml/imgspread@latest/imgspread.js" type="text/javascript"></script>
<script type="text/javascript">
    window.addEventListener("load", function () {
        imgspread("my_custom_class");
    });
</script>
```


## Similar approach

* [version for mediawiki](http://regionales-wirtschaften-wiki.de/Kleinstkraftwerke) with [srcset attribute](http://www.w3.org/html/wg/drafts/srcset/w3c-srcset/), script [on wikipedia](https://de.wikipedia.org/wiki/Benutzer:VanGore/common.js).

## Usability

Usability pros and cons:

+ there is __no modal window__, so the main window still __can__ be used and seen. 
+ if there is no JS: you get an __unobtrusive__ thumb and link to the big version
- __word wraps__ in continuous text changes every time you zoom in a image


Has anybody similar approaches? fork or <earth@klml.de>

## TODO

* srcset
* big image with url logic
