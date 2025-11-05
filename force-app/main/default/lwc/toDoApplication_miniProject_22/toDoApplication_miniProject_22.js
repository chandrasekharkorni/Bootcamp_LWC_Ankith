import { LightningElement } from 'lwc';

export default class ToDoApplication_miniProject_22 extends LightningElement {
    taskname="";
    taskdate=null;
    incompletetask=[];
    completetask=[];
    
    changehandler(event){
        let {name,value}=event.target;
        if(name==="taskname"){
            this.taskname=value;
        }else if(name==="taskdate"){
            this.taskdate=value;
        }
    }

    resetHandlar(){
        this.taskname="";
        this.taskdate=null;
    }
    addtaskHandlar(){
        //if task end date is missing ,when populate todays date
        if(!this.taskdate){
            this.taskdate=new Date().toISOString().slice(0,10);

        }
        if(this.validatetask()){
            this.incompletetask=[
                ...this.incompletetask,
                {
                taskname:this.taskname,
                taskdate:this.taskdate
            }
        ];
        this.resetHandlar();
        let sortedArray=this.sorttask(this.incompletetask);
        this.incompletetask=[...sortedArray];
        console.log("incompletetask",JSON.stringify(this.incompletetask));
        
        }

    }
    validatetask(){
        let isValid=true;
        let element=this.template.querySelector(".taskname");
        //condition 1 --->check if task is empty
        //cpndition 2--->is task name is not empty then check for duplicate

        if(!this.taskname){
            //check if task is empty
            isValid=false;
        }else{
            //if find method is always find an item it will return task item,if not found
            //it will return undefined
            let taskitem=this.incompletetask.find(
                (currentItem)=> 
                    currentItem.taskname===this.taskname &&
                currentItem.taskdate===this.taskdate

            );
            if(taskitem){
                isValid=false;
                element.setCustomValidity("task is already available");
            }

        }
        if(isValid){
            element.setCustomValidity("");
        }
        element.reportValidity();
        return isValid;
    }
    sorttask(inputarr){
        let sortedarray=inputarr.sort((a,b)=>{
            const dateA=new Date(a.taskdate);
            const dateB=new Date(b.taskdate);
            return dateA-dateB;
        });

        return sortedarray;
    }

    //delete operation
    removeHandlar(event){
        //from incomplete task array we have remove the item
        let index=event.target.name;
        this.incompletetask.splice(index,1);
         let sortedArray=this.sorttask(this.incompletetask);
         this.incompletetask=[...sortedArray];
       console.log("incompletetask",this.incompletetask);


    }
    //check box
    completeTaskHandlar(event){
       // ..remove the entry from incomplete task array
        let index=event.target.name;
       this.refreshData(index);

    }
    dragstarHandlar(event){
        event.dataTransfer.setData("index",event.target.dataset.item);

    }
    allowDrop(event){
        event.preventDefault();
    }
    dropElementHandlar(event){
       let index=event.dataTransfer.getData("index");
        this.refreshData(index);
       }

       refreshData(index){
         let remove=this.incompletetask.splice(index,1);
        let sortedArray=this.sorttask(this.incompletetask);
         this.incompletetask=[...sortedArray];
        console.log("incompletetask",this.incompletetask);
        //add same item in complete task array
       this.completetask=[...this.completetask,remove[0]];

       }

}