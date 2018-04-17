/**
 * All the UI interactions can go right here. 
 *
 * All the public methods and properties in this class will be available in the module.main, as this class is being extended there.
 * All the public methods and properties from the module.service will be available here, as this class is extending the ModuleServices class 
 *
 */

import $ from 'jquery';
import { SampleModuleServices } from './samplemodule.services';

export class SampleModuleInteractions extends SampleModuleServices { 

    constructor() { 
        super();
    }

    initSampleModule() { 
        console.log('Initialized sample module');
		
		this.getDataFromMyService();
    }
	
	getDataFromMyService() { 
		let myServicesData = this.mySampleServiceMethod();
		myServicesData.then((res) => {
			console.log('Response ', res);
		});
	}
}
