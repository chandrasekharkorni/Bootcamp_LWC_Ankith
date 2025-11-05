import { LightningElement } from 'lwc';

export default class CaluclatorMiniProject extends LightningElement {
    firstNum="";
    secondNum="";
    result=0;
    diplayoutput=false;

    handleFirstNum(event){
        
        this.firstNumber=event.target.value;
    }
    handleSecondNum(event){
        this.secondNumber=event.target.value;
    }
    handleAdd(){
        this.diplayoutput=true;
        this.result=parseInt(this.firstNumber)+parseInt(this.secondNumber);
    }
    handleSub(){
        this.diplayoutput=true;
        this.result=parseInt(this.firstNumber)-parseInt(this.secondNumber);
    }
    handleMul(){
        this.diplayoutput=true;
        this.result=parseInt(this.firstNumber)*parseInt(this.secondNumber);
    }
    handleDiv(){
        this.diplayoutput=true;
        this.result=parseInt(this.firstNumber)/parseInt(this.secondNumber);
    }

    handleReset(){
        this.firstNumber="";
        this.secondNumber="";
        this.result=0;
    }

}