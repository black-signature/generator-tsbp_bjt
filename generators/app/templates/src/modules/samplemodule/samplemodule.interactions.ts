import $ from 'jquery';
import { SampleModuleServices } from './samplemodule.services';

export class SampleModuleInteractions extends SampleModuleServices { 

    constructor(){ 
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
