import { LightningElement } from 'lwc';

export default class DynamicCss_day21_2 extends LightningElement {
    pcolour="orange-colour";

    addCssHandlar(event){
        let element=this.template.querySelector("p");
        element.classList.add("green-border");

    }
    removeCssHandlar(event){
        let element=this.template.querySelector("p");
        element.classList.remove("green-border");
    }
    toggleCssHandlar(event){
        let element=this.template.querySelector("p");
        element.classList.toggle("green-border");
    }
}