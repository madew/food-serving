class mobileMenu {
  constructor() {
    this.iconWrap = document.querySelector('.header__mobile-menu');
    this.icon = document.querySelector('.header__mobile-menu-icon');
    this.menu = document.querySelector('.header__list-wrap');
    this.events();
  }

  events() {
    this.iconWrap.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.icon.classList.toggle('header__mobile-menu-icon--close-x');
    this.menu.classList.toggle('header__list-wrap--is-visible');
  }
}

export default mobileMenu;
