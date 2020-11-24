$(function () {
    var $win = $(window);
    var $backToTop = $('.js-back-to-top');
    $win.scroll(function () {
        if ($win.scrollTop() > 200) {
            $backToTop.show();
            } else {
                $backToTop.hide();
                }
                });
                
$backToTop.click(function () {
    $('html, body').animate({scrollTop: 0}, 200);
    });
    });