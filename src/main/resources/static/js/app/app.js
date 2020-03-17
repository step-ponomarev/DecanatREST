'use strict';

import {Nav} from '../nav/nav.js';
import {About} from '../about/about.js';
import {Marks} from '../marks/marks.js';

export class App {
    constructor() {
        this.element = document.querySelector('#app');
        this.subjects = new Marks();
        this.about = new About();
        this.nav = new Nav();

        this.openSubjects = (event) => {
            this.subjects.start();
        };

        this.openAbout = (event) => {
            this.about.start();
        };
    }

    start() {
        this.nav.start();
        this.about.start();
        this.addActions();
    }

    addActions() {
        const links = Array.from(this.nav.links);

        links.forEach(link => {
            link.addEventListener('click', (event) => {
                const currentLink = event.target;

                links.forEach(link => {
                    if (link.id ===  currentLink.id) {
                        link.classList.add('nav__item__active');
                    } else {
                        link.classList.remove('nav__item__active');
                    }
                });

            });
        });

        const subjectsLink = this.nav.subjectsLink;
        subjectsLink.addEventListener('click', this.openSubjects);

        const aboutLink = this.nav.aboutLink;
        aboutLink.addEventListener('click', this.openAbout);
    }
}