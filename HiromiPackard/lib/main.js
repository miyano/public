(function($) {

    window.app = {
        init: function() {
            this.is_ipad = navigator.userAgent.indexOf('iPad') > -1;
            this.is_iphone = navigator.userAgent.indexOf('iPhone') > -1;
            return true;
        },
        spritely: {
            init: function() {
                $('#fish1')
                    .sprite({fps: 5, no_of_frames: 4})
                    .isDraggable({
                        start: function() {
                            if  (!$.browser.msie) {
                                $('#fish1').fadeTo('fast', 0.7);
                            }
                        },
                        stop: function() {
                            if (!$.browser.msie) {
                                $('#fish1').fadeTo('slow', 1);
                            }
                        }
                    })
                    .active();
                $('#fish2')
                    .sprite({fps: 5, no_of_frames: 4})
                    .isDraggable({
                        start: function() {
                            if  (!$.browser.msie) {
                                $('#fish2').fadeTo('fast', 0.7);
                            }
                        },
                        stop: function() {
                            if (!$.browser.msie) {
                                $('#fish2').fadeTo('slow', 1);
                            }
                        }
                    })
                    .active();
                $('#fish3')
                    .sprite({fps: 5, no_of_frames: 4})
                    .isDraggable({
                        start: function() {
                            if  (!$.browser.msie) {
                                $('#fish3').fadeTo('fast', 0.7);
                            }
                        },
                        stop: function() {
                            if (!$.browser.msie) {
                                $('#fish3').fadeTo('slow', 1);
                            }
                        }
                    })
                    .active();
                var offset = $('#stage').offset();
                offset.top = 0; offset.left = 0;
                var stage_width = $('#stage').width();
                var stage_height = $('#stage').height();
                var top = offset.top + stage_height * 0.3;
                var left = offset.left + stage_width * 0.2;
                var bottom = offset.top + stage_height * 0.6;
                var right = offset.left + stage_width * 0.7;

                $('#fish1').css({top: top + (bottom - top) * 0.2 , left: left + (right - left) * 0.2, visibility: "visible"});
                $('#fish2').css({top: top + (bottom - top) * 0.7 , left: left + (right - left) * 0.5, visibility: "visible"});
                $('#fish3').css({top: top + (bottom - top) * 0.4 , left: left + (right - left) * 0.7, visibility: "visible"});

                $('#fish1').spRandom({top: top, left: left, right: right, bottom: bottom, speed: 3500, pause: 5000});
                $('#fish2').spRandom({top: top, left: left, right: right, bottom: bottom, speed: 2500, pause: 3000});
                $('#fish3').spRandom({top: top, left: left, right: right, bottom: bottom, speed: 4500, pause: 6000});

                if (window.app.is_ipad) {
                } else {
                    if (window.app.is_iphone || document.location.hash.indexOf('iphone') > -1) {

                    } else {

                    }
                }
            }
        }
    };

    $(document).ready(function() {
        window.app.init();
        window.app.spritely.init();
    });
})(jQuery);
                    