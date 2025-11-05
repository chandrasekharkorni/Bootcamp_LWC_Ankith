import { LightningElement,track } from 'lwc';

export default class PrivatePublicDecorators extends LightningElement {
    greeting = "Hello World";
    @track message="welcome salesforce";
    handleClick(event){
        this.greeting = "Hello Ankit";
        this.message="welcome to salesforce day 19";
    }
}