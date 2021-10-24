function imgspread(imgspread_class="imgspread") {

    var imgspread_classes = document.getElementsByClassName(imgspread_class);

    for (var classes = 0; classes < imgspread_classes.length; ++classes) {

        var a = imgspread_classes[classes].getElementsByTagName("a");

        for (var links = 0; links < a.length; ++links) {
            a[links].addEventListener("click", function() {
                var old_src = this.getElementsByTagName("img")[0].src;
                this.getElementsByTagName("img")[0].src = this.href;
                this.href = old_src;
                event.preventDefault();
            });
        }
    }
}