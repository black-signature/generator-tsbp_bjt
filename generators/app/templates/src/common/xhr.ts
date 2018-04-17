/**
 * XMLHttpRequest API can be imported and used from here.
 *
 * @param cObj: Object = {url : 'url to call', method: 'GET or POST', data: 'data object'}
 * @return Promise
 */

import $ from 'jquery';
import { CONFIG } from '../app.config';

export class RequestAPI {
    request(cObj: any){
        let reqPromise = new Promise((resolve, reject) => { 
            $.ajax({
                url: cObj.url,
                method: cObj.method,
                data: cObj.data,
                cache: false,
                success: (res) => {
                    resolve(res);
                },
                error: (res) => {
                    reject(res);
                }
            });
        });

        return reqPromise;
    }
}
