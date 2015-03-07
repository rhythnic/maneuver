//toggle main offcanvas
$('.wrap > .content > .menu-btn:first-child').on('click', function() { $('.wrap').toggleClass('open'); });

$('.oc-1 button').on('click', function (e) { $('.oc-1').toggleClass('open'); });
$('.oc-2 button').on('click', function (e) { $('.oc-2').toggleClass('open'); });
$('.oc-3 .toggle-top').on('click', function (e) { $('.oc-3').toggleClass('open-top'); });
$('.oc-3 .toggle-bottom').on('click', function (e) { $('.oc-3').toggleClass('open-bottom'); });