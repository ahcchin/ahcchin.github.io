////////////////////////////////////////////////////////
//
//  Very simple gallery that toggles .selected
// 
//  $('.gallery').gallery();
//
//  Note: this should be paired with CSS transitions
//  to give the desired effect.
//
//  Cross-fade SASS example:
//  .gallery
//    figure
//      opacity: 0
//      +transition(opacity 0.5s linear)
//      &.selected
//        opacity: 1
//
////////////////////////////////////////////////////////
(function (a) {
    a.fn.gallery = function (b) {
        return this.each(function () {
            var b = {
                timeout: 6e3
            }, c = a.extend(b, c),
                d = a(this).children(),
                e = d.length,
                f = d.filter(".selected").index(),
                g = function () {
                    d.eq(f).removeClass("selected"), f = (f + 1) % e, d.eq(f).addClass("selected")
                };
            setInterval(g, c.timeout)
        })
    }
})(jQuery);