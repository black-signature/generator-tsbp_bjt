/**
 * The app starts here. 
 * 
 * Initialize new modules in the constructor() as you create them. Import the corresponding module.main class as well.
 */

import { AppRoutes } from './app.routes';
import { SampleModule } from './modules/samplemodule/samplemodule.main';

class AppMain extends AppRoutes { 
    constructor() {
        super();
        
        new SampleModule();
    }
}

document.addEventListener("DOMContentLoaded", () => { 
    new AppMain();
});
