'use strict';

const DomElement = function (selector) {
   this.selector = selector;

};
DomElement.prototype.setElem = function () {
   let a = this.selector.split('');
   if (a[0] == '.') {
      document.body.appendChild(document.createElement('div'));
      let с = document.getElementsByTagName('div')[0];
      с.classList.add(this.selector.substr(1, this.selector.length));
      с.innerText = 'привет, это див с классом ' + this.selector.substr(1, this.selector.length);
      с.style.cssText = `height: 200px;
      width: 300px;
    background: red;
    font-size: 32px;
    `;
   }
   else if (a[0] == '#') {
      document.body.appendChild(document.createElement('p'));
      let n = document.getElementsByTagName('p')[0];
      n.id = this.selector.substr(1, this.selector.length);
      n.innerText = 'привет, это <p> с id ' + this.selector.substr(1, this.selector.length);
      n.style.cssText = `height: 200px;
      width: 300px;
    background: yellow;
    font-size: 32px;
    `;
   }
   console.log(document);
};

const CreateDomElement = function (selector, height, width, bg, fontSize) {
   DomElement.call(this, selector);
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
};

CreateDomElement.prototype = Object.create(DomElement.prototype);
CreateDomElement.prototype.constructor = CreateDomElement;

const newCreateDomElement = new CreateDomElement(prompt('введите имя класса или id'), '200px', '300px', 'red', '32px');

newCreateDomElement.setElem();

console.log(newCreateDomElement);
