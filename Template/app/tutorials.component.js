"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Tutorials from Mohan";
        // public imgLink = "http://lorempixel.com/400/200";
        // public applyclasscondition = true;
        // public applyBlue = false;
        // onclick(value){
        //    console.log(value);
        // }
        this.fname = 'mohan';
        this.lname = 'raj';
        this.showElement = false;
        this.color = 'blue';
        this.colors = ['red', 'blue', 'green'];
    }
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            //This Contains both class binding and Style Binding
            // template: `<h2> {{ title }}</h2>
            //              <img [src] = "imgLink"><br><br>
            //             <div [class.myClass]="applyclasscondition"> Apply Changes</div>
            //            <div [style.color] = "applyBlue? 'blue' : 'orange'"> This is Style Binding</div>
            //            <button (click)="onClick(demoInput.value)">Click Me</button>
            //           <input type="text" #demoInput>
            //            `,
            template: "<h2> {{ title }}</h2>\n                <input type = \"text\" [(ngModel)]=\"fname\">\n                <input type = \"text\" [(ngModel)]=\"lname\">\n                FullName : {{ fname }}    {{ lname }}\n                <p *ngIf=\"showElement\">Show Element<p>\n                <div [ngSwitch]=\"color\">\n                    <p *ngSwitchWhen=\"'red'\">Red Color is Shown</p>\n                    <p *ngSwitchWhen=\"'blue'\">Blue Color is Shown</p>\n                    <p *ngSwitchDefault>Invalid Color</p>\n                </div>\n                <ul>\n                    <li *ngFor=\"let color of colors\">{{color}}</li>\n                </ul>",
            styles: ['.myClass{ color:red;}']
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map