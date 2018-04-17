/**
 * All services used for the modules can go right here. 
 * 
 * Check the commented code below in mySampleServiceMethod() to see how to make a request to the server using RequestAPI class
 */

import { CONFIG } from '../../app.config';
import { RequestAPI } from '../../common/xhr';

export class SampleModuleServices { 
    
	private reqObj = new RequestAPI();

    mySampleServiceMethod(): Promise<any> { 
        /* return this.reqObj.request({
            url: `${CONFIG.baseURL"/getDataURL"}`,
            method : 'POST',
            data : ''
        }); */
		
		/* Intentionally commented the above statement */
		
		/*
		 * Uncomment the above statement when the API is available.. returning a sample promise at the moment :: 
		 * Delete the below statements when integrating with the actual API 
		*/
		
		return new Promise((resolve, reject) => { 
			resolve('This is a sample response from the service');
		});
    }
}
