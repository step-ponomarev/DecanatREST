'use strict';

export class NavView {
    constructor(element) {
        this.template = `<nav class="nav" id="nav">
        <div class="nav__items">
          <a class="nav__item nav__item__active" id="aboutLink">
            about
          </a>
          <a class="nav__item" id="subjectsLink">
            marks
          </a>
        </div>

        <div class="nav__logo"></div>

        <div class="nav__login">
          <a class="nav__username" id="personalAreaLink" hidden>
          </a>
          <a class="nav__loginLink">
            login
          </a>
        </div>
      </nav>`;

        this.element = element;
        this._user = null;

        this.render = this.render.bind(this);
    }

    render() {
        this.element.insertAdjacentHTML('afterbegin', this.template);
        this.addUser();
    }

    addUser() {
        if (this._user == null) {
            return;
        }

        const userLink = document.querySelector('#personalAreaLink');

        userLink.insertAdjacentHTML('beforeend', `${this._user}`);
        userLink.hidden = false;
    }

    set user(user) {
        this._user = user;
    }

    get user() {
        return this._user;
    }
}