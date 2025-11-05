import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {

            showDisconnectedCallBack=false;
    constructor(){
        super();
        console.log("constructor from parent")
        }
    connectedCallback(){
         console.log("connectedcallback from parent")
    }
    renderedCallback(){
         console.log("renderedcallback from parent")

    }
    errorCallback(error,stack){
        console.log("error call back from parent");
        console.log("error",error);
        console.log("stack",stack);

    }
    disconnectedCallback(){
        console.log("disconnectedcall back from parent")
    }
    changehandlar(event){
        this.showDisconnectedCallBack=event.target.checked;
    }
}