(function($){
     $.fn.extend({ 

         imgspread: function(options) {

            return this.each(function() {

                 $(this).click( function ( event ) {
                    var img = $(this).find('img') ,
                        src = img.attr('src') ,
                        href = $(this).attr('href') ;
            
                    img.attr('src', href ) ;
                    $(this).attr('href', src ) ;
                    event.preventDefault();
                });
            });
        }
    });
})(jQuery);
