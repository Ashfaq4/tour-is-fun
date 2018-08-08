/*
import $ from 'jquery';

class MobileMenu {
  constructor() {
    /*
    1. Selecting elements from the DOM
    2. Event handling
    3. Defining functionality

    these three tasks in one code which should avoid.

    $('.site-header__menu-icon').click(function() {
      console.log('Mobile menu clicked');
    });
    */
/*
    //1. Selecting elements from the DOM
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
    }

    //2. Event Handling
    events() {
      this.menuIcon.click(this.toggleMenu.bind(this));
    }

    //3. Define Functionality
    toggleMenu() {
      this.menuContent.toggleClass('site-header__menu-content--is-visible');
    }

  }


export default MobileMenu;
*/

class MobileMenu {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.menuContent = document.querySelector('.site-header__menu-content');
    this.events();
  }
  events() {
    this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
  }
  toggleMenu(){
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    this.siteHeader.classList.toggle('site-header--is-expanded');
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;


