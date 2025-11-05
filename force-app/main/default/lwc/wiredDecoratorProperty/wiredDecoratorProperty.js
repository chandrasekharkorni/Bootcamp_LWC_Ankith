import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/accountHelper.getAccounts';
const columns = [
    { label: 'AccountName', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Rating', fieldName: 'Rating' },
    
];

export default class WiredDecoratorProperty extends LightningElement {
    columns = columns;
    @wire(getAccounts) accounts;

    //accounts.data
    //accounts.error
}
