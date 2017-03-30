const main = require('./templates/main.hbs');
const mdlMenuList = require('./templates/mdl-menu-list.hbs');
const mdlMenuItem = require('./templates/mdl-menu__item.hbs');
const mdlNavigationLink = require('./templates/mdl-navigation__link.hbs');
const json = require('./json/data.json');

const doc = document;
const root = doc.querySelector('#root');

const DOM = {
    headerMenuList: '[data-view="mdl-menu-list"]',
    mdlMenuItem: '[data-view="mdl-menu__item"]',
    mdlNavigationLink: '[data-view="mdl-navigation__link"]'
};

root.innerHTML = main({});

doc.querySelector(DOM.headerMenuList).innerHTML = mdlMenuList({
    json: json.mdlMenuList
});
doc.querySelector(DOM.mdlMenuItem).innerHTML = mdlMenuItem({
    json: json.mdlMenuItem
});
doc.querySelector(DOM.mdlNavigationLink).innerHTML = mdlNavigationLink({
    json: json.mdlNavigationLink
});

//chart path
require('./chartist/ct-chart.js');

