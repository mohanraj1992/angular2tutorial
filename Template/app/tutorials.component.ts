 import { Component } from '@angular/core';


 @Component({
    selector: 'my-tutorials',
    //This Contains both class binding and Style Binding
   // template: `<h2> {{ title }}</h2>
  //              <img [src] = "imgLink"><br><br>
   //             <div [class.myClass]="applyclasscondition"> Apply Changes</div>
    //            <div [style.color] = "applyBlue? 'blue' : 'orange'"> This is Style Binding</div>
    //            <button (click)="onClick(demoInput.value)">Click Me</button>
     //           <input type="text" #demoInput>
    //            `,
    template: `<h2> {{ title }}</h2>
                <input type = "text" [(ngModel)]="fname">
                <input type = "text" [(ngModel)]="lname">
                FullName : {{ fname }}    {{ lname }}
                <p *ngIf="showElement">Show Element<p>
                <div [ngSwitch]="color">
                    <p *ngSwitchWhen="'red'">Red Color is Shown</p>
                    <p *ngSwitchWhen="'blue'">Blue Color is Shown</p>
                    <p *ngSwitchDefault>Invalid Color</p>
                </div>
                <ul>
                    <li *ngFor="let color of colors">{{color}}</li>
                </ul>`,




    styles:['.myClass{ color:red;}']

 })
 export class TutorialsComponent{ 
     public title = "Tutorials from Mohan"; 
    // public imgLink = "http://lorempixel.com/400/200";
    // public applyclasscondition = true;
    // public applyBlue = false;
    // onclick(value){
    //    console.log(value);
    // }
    public fname = 'mohan';
    public lname = 'raj';

    public showElement=false;
    public color='blue';
    public colors=['red', 'blue', 'green'];
  }