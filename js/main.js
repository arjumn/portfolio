var pf = {

  selectors : {
    'navigationSection' : '.navigation',
    'navigationIcon' : '.navigation .icon-sm',

    'homePageSection' : '.home',
    'aboutMeSection' : '.about-me',

    'experienceTile' : '.experience .exptile',
    'projectDiv' : '.projects',
    'closeBtn' : '.close-btn'
  },

  init : function() {
    var self = this;
    self.setupUI();
    self.setupEvents();
  },

  setupUI : function() {
    var self = this,
        window_width = $(window).width(),
        window_height = $(window).height(),
        $skillseth1 = $(self.selectors.aboutMeSection).find('.skillset h1');

    // set the height of the viewport as the height of the page
    $(self.selectors.homePageSection).height(window_height);

    // set the height of the navigation bar to start from the second page
    $(self.selectors.navbar).css({'top': window_height + 'px'});

    // set the skillset to center align the screen
    var left = ($(self.selectors.aboutMeSection).find(".skillset").width()/2) - ($skillseth1.width()/2);
    $skillseth1.css({'left':left});
  },

  setupEvents : function() {
    var self = this,
        height = $(window).height();

    // window resize event
    $(window).on('resize', function(event) {
      self.setupUI();
    });

    // navigation
    $(self.selectors.navigationIcon).hover(function(){
      $(this).siblings("span").removeClass("fadeOut").addClass("fader");
    }, function() {
      $(this).siblings("span").addClass("fadeOut");
    });

    $(self.selectors.experienceTile).click(function(){
      var $self = $(this);
      $self.addClass('active').siblings().removeClass('active');
    });

    $(self.selectors.closeBtn).click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      var $parent = $(this).closest(self.selectors.experienceTile);
      $parent.removeClass('active');
    });
  }

};

$(document).ready(function() {
  pf.init();
});
