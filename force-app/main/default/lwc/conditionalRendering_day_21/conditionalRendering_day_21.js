import { LightningElement } from 'lwc';

export default class ConditionalRendering_day_21 extends LightningElement {
    displaymessage=false;

    handlechange(event){
        //event.target.checked;
        //toggle handle js
        this.displaymessage=!this.displaymessage;
    }
}