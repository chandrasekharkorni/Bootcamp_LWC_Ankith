import { LightningElement ,api} from 'lwc';

export default class ChildComponent extends LightningElement {
    @api display;  //small case
    @api displayGreeting;   //camel case
    @api user;     //object
    @api isAvailable=false;   //boolean

}