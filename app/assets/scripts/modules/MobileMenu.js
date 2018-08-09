/*
import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $('.site-header__menu-icon');
    this.siteHeader = $('.site-header');
    this.menuContent  = $('.site-header__menu-content');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
  }
}

export default MobileMenu;
*/

//JavaScript Way

class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.siteHeader = document.querySelector('.site-header');
    this.menuContent = document.querySelector('.site-header__menu-content');
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    this.siteHeader.classList.toggle('site-header--is-expanded');
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
  }
}

export default MobileMenu;