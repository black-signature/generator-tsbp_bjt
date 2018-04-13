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
