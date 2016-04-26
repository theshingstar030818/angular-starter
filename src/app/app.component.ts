/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {Http} from 'angular2/http';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

import {Accordion, AccordionTab, Tree, SplitButton} from 'primeng/primeng';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [
    RouterActive,
    Accordion,
    AccordionTab,
    SplitButton,
    Tree
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    `
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <p-accordion>
      <p-accordionTab header="Header 1">
         Content 1
      </p-accordionTab>
      <p-accordionTab header="Header 2">
          Content 2
      </p-accordionTab>
      <p-accordionTab header="Header 3">
          Content 3
      </p-accordionTab>
    </p-accordion>

    <p-tree [value]="files"></p-tree>

  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  files: Array<any>;

  constructor(
    public http: Http,
    public appState: AppState,
    public router: Router) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
    this.http.get('/assets/tree.json')
      .subscribe(res => {
        this.files = res.json().data;
      });
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
