'use strict';

import Toggler from 'metal-toggler';
import Soy from 'metal-soy';
import ElectricNavigationBase from 'electric-base-components';

import templates from './ElectricNavigation.soy';

class ElectricNavigation extends ElectricNavigationBase {
  attached() {
    // compound selector list matching only the topmost electric navigation menus 
    const menuSelector = this.menuClasses ? `nav.${this.menuClasses.split(/\s+/).join(',nav.')}` : 'nav';

    // elements that are the topmost electric navigation menus
    const menuElements = [].slice.call(document.querySelectorAll(menuSelector));

    // array of toggles used by the document
    this.togglers = menuElements.map(
      menuElement => {
        // list element is presumed to be the first child of the menu
        const listElement = menuElement.firstChild;

        // generated toggle element, inserted before the list element
        const menuTogglerElement = document.createElement('button');

        menuTogglerElement.className = this.togglerClasses || '';

        menuElement.insertBefore(menuTogglerElement, listElement);

        return new Toggler({
          content: listElement,
          header: menuTogglerElement,
          collapsedClasses: this.collapsedClasses,
          expandedClasses: this.menuExpandedClasses
        });
      }
    );
  }

  disposed() {
    let togglers = this.togglers;

    if (togglers.length) {
      togglers.forEach(
        toggler => {
          toggler.dispose();
        }
      );
    }
  }
}

ElectricNavigation.STATE = {
  section: {},
  listClasses: {},
  menuClasses: {},
  togglerClasses: {}
};

Soy.register(ElectricNavigation, templates);

export default ElectricNavigation;