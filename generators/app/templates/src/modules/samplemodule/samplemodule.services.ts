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
		
		/* Uncomment the above statement when the API is available.. returning a sample promise at the moment :: Delete the below statements when API is ready */
		
		return new Promise((resolve, reject) => { 
			resolve('This is a sample response from the service');
		});
    }
}
