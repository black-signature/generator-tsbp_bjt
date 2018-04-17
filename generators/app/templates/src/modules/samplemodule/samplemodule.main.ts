/**
 * Module can be initialized in the constructor. 
 * 
 * All the interactions are inheriting from ModuleInteractions class 
 */
 
import { SampleModuleInteractions } from './samplemodule.interactions';
export class SampleModule extends SampleModuleInteractions {
    constructor() { 
        super();
		
        this.initSampleModule();
    }
}
