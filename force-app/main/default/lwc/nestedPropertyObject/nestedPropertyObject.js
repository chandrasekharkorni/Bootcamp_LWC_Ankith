import { LightningElement,track } from 'lwc';

export default class NestedPropertyObject extends LightningElement {
   @track myDetails={fname :"ankith",lname:"jain"};
   @track myTask=["ram","hari","shyam"];
   // rendered with or without track
    handleClickWithOutTrack(event){
        this.myDetails={...this.myDetails,fname:"rajini"};
        this.myTask=["ramya",...this.myTask];
    }
    //rendered with track
    handleClickWithTrack(event){
        this.myDetails.fname="jamimah";
        this.myDetails.lname="rodrics";
        this.myTask.push("ankith");
    }
}