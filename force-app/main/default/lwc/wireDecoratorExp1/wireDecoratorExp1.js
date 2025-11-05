import { LightningElement ,wire} from 'lwc';
import getAccounts from '@salesforce/apex/accountHelper.getAccounts';
const columns = [
    { label: 'AccountName', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Rating', fieldName: 'Rating' },
    
];
export default class WireDecoratorExp1 extends LightningElement {
    accounts;
    errors;
    columns = columns;
    @wire(getAccounts) accountFunction({error,data}){
        if(data){
           let updatedaccounts=data.map((currenItem)=>{
            let updatedObjects={};
            if(!currenItem.hasOwnProperty("Rating")){
                updatedObjects={...currenItem,Rating:"Warm"};
            }else {
                updatedObjects={...currenItem};
            }
            return updatedObjects;

           });
           console.log("updatedaccounts",updatedaccounts);
           this.accounts=[...updatedaccounts];
           this.errors=null;

           }
        else if(error){
           console.log(error);
           this.accounts=null;
           this.errors=error;

        }
        }
    }
    

