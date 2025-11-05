import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
     constructor(){
        super();
        console.log("constructor from child");

    }
    connectedCallback(){
        console.log("connectedcallback from child");
        throw new Error("error while component throws")

    }
    renderedCallback(){
        console.log("renderedcallback from child");

    }
    errorCallback(error,stack){

    }
     disconnectedCallback(){
        console.log("disconnectedcall back from child")
    }

}