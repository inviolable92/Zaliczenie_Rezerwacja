import _ from 'lodash';
import './style.css';
import Icon from './assets/icon.png';
import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Rezerwacja:)))))', 'lotów'], ' ');
   element.classList.add('hello');

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
   
   element.appendChild(btn);

   return element;
    
  }

  function showlogo() {
   const element = document.createElement('div');
   element.classList.add('logo');
   return element;
    
  }


  document.body.appendChild(showlogo());
  document.body.appendChild(component());
