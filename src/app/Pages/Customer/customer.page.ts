import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService, ViewType} from '../../services/Data.service';
import { AppStates } from '../../services/app.service';

@Component({
    selector: 'CustomerPage',
    templateUrl:'customer.page.html'
  })

export class CustomerPage {
    public p: number = 1;
    public collection: any = []  
    public isGrid:boolean = false;
    public viewType = ViewType;
    
    lat: number = 51.0902;
    lng: number = 7.7129;
    public imgSrc;
    public city;
    public text:any;
    public isMap:boolean =false;

    constructor(public dataservice:DataService){
        this.collection = this.dataservice.customers;
    }

    getFirstChar(name){
        return name.split("")[0]
    }

    clickedMarker(label: string,src:string, city:string, index: number) {
        this.text = label;
        this.imgSrc = src;
        this.city = city;
        }
        
          
    toggleView(type){
        if(type == ViewType.Grid){
            this.isGrid = true;
            this.isMap = false;
        }else if(type == ViewType.List){
            this.isGrid = false;
            this.isMap = false;
        }else{
            this.isGrid = false;
            this.isMap = true;
        }
    }

 
  
}







