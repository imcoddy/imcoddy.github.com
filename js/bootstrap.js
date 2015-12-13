$(document).ready(function () {

  isMobile() && FastClick.attach(document.body);

  $("#posts").find('img').lazyload({
    placeholder: "{{ url_for(theme.images) }}/loading.gif",
    effect: "fadeIn"
  });

  $('.back-to-top').on('click', function () {
    $('body').velocity('scroll');
  });

  $('.site-nav-toggle button').on('click', function () {
    var $siteNav = $('.site-nav');
    var ON_CLASS_NAME = 'site-nav-on';
    var isSiteNavOn = $siteNav.hasClass(ON_CLASS_NAME);
    var animateAction = isSiteNavOn ? 'slideUp' : 'slideDown';
    var animateCallback = isSiteNavOn ? 'removeClass' : 'addClass';

    $siteNav.stop()[animateAction]('fast', function () {
      $siteNav[animateCallback](ON_CLASS_NAME);
    });
  });

  $('#st-search-input').focus(function(){
    $(this).animate({ width:"250px"}, 800); // enlarge width
  }).blur(function(){
    $(this).animate({ width:"140px"}, 800); // return to original value
  });

  // Define Motion Sequence.
  motionIntegrator
    .add(motionMiddleWares.logo)
    .add(motionMiddleWares.menu)
    .add(motionMiddleWares.postList)
    .add(motionMiddleWares.sidebar);

  // Bootstrap Motion.
  CONFIG.motion && motionIntegrator.bootstrap();
});
