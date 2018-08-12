import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.headerWaypoint();
    this.pageSection = $('.page-section');
    this.headerLink = $('.primary-nav a');
    this.pageSectionWaypoints();
    this.smoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function(){
      Waypoint.refreshAll();
    });
  }

  smoothScrolling () {
    this.headerLink.smoothScroll();
  }

  headerWaypoint() {
    var that = this;
    new Waypoint({
      // By the following this keyword waypoint expect 
      // js native dom element but currentl we are passing 
      //jQuery object. To access native dom element by jquery
      //object by[0]
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if(direction == 'down') {
          that.siteHeader.addClass('site-header--dark');
          that.siteHeader.addClass('site-header__logo--x');
        } else {
          that.siteHeader.removeClass('site-header--dark');
          that.siteHeader.removeClass('site-header__logo--x');
        }
      }
    });
  }

  pageSectionWaypoints() {
    var that = this;
    this.pageSection.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == 'down') {
            var matchingHeaderLink = currentPageSection.getAttribute('data-match-link');
            that.headerLink.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        }, 
        offset: '20%'
      });
      
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == 'up') {
            var matchingHeaderLink = currentPageSection.getAttribute('data-match-link');
            that.headerLink.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        }, 
        offset: '-40%'
      });


    });

  }

}

export default StickyHeader;