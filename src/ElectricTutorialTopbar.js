'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './ElectricTutorialTopbar.soy';
import {dispatchGlobalState} from './utils';

class ElectricTutorialTopbar extends Component {
	openNavigationMenu(e) {
		e.preventDefault();

		page.navigationToggler = true;
		dispatchGlobalState();
	}
};

Soy.register(ElectricTutorialTopbar, templates);

export default ElectricTutorialTopbar;