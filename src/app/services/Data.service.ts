import { Injectable, EventEmitter } from '@angular/core';


export enum ViewType {
    Grid = 1,
    List = 2,
    Map = 3
  }

@Injectable()
export class DataService {



    public customers = [{
        "name":"Andrew Johnson",'city':'Phoenix',"country":"california","lat":51.0902,"long":7.7129,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Ted JAmes",'city':'Phoenix',"country":"california","lat":51.2033,"long":8.1945,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Michele Thompson",'city':'Phoenix',"country":"california","lat":51.6648,"long":8.5158,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Zed Bishop",'city':'Phoenix',"country":"california","lat":51.490671,"long":5.9686,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Tina Adams",'city':'Phoenix',"country":"california","lat":51.2033,"long":7.1945,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Igor Minar",'city':'Phoenix',"country":"california","lat":51.0583,"long":7.4057,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Brad Green",'city':'Phoenix',"country":"california","lat":51.7296,"long":8.6859,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Misey Havery",'city':'Phoenix',"country":"california","lat":50.7596,"long":7.0193,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Heedly Joah",'city':'Phoenix',"country":"california","lat":51.0489,"long":7.0937,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Andrew Johnson",'city':'Phoenix',"country":"california","lat":51.4173,"long":7.9071,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Ted JAmes",'city':'Phoenix',"country":"california","lat":50.4072,"long":7.3824,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Michele Thompson",'city':'Phoenix',"country":"california","lat":51.3182,"long":6.9023,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Zed Bishop",'city':'Phoenix',"country":"california","lat":51.5175,"long":7.5804,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Tina Adams",'city':'Phoenix',"country":"california","lat":51.5501,"long":5.7821,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Igor Minar",'city':'Phoenix',"country":"california","lat":51.3148,"long":8.6024,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Brad Green",'city':'Phoenix',"country":"california","lat":50.2008,"long":7.4937,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Misey Havery",'city':'Phoenix',"country":"california","lat":51.8041,"long":6.5542,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Heedly Joah",'city':'Phoenix',"country":"california","lat":50.4316,"long":7.1,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Andrew Johnson",'city':'Phoenix',"country":"california","lat":51.0902,"long":7.7129,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Ted JAmes",'city':'Phoenix',"country":"california","lat":51.2033,"long":8.1945,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Michele Thompson",'city':'Phoenix',"country":"california","lat":51.6648,"long":8.5158,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Zed Bishop",'city':'Phoenix',"country":"california","lat":51.490671,"long":5.9686,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Tina Adams",'city':'Phoenix',"country":"california","lat":51.2033,"long":7.1945,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Igor Minar",'city':'Phoenix',"country":"california","lat":51.0583,"long":7.4057,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Brad Green",'city':'Phoenix',"country":"california","lat":51.7296,"long":8.6859,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Misey Havery",'city':'Phoenix',"country":"california","lat":50.7596,"long":7.0193,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Heedly Joah",'city':'Phoenix',"country":"california","lat":51.0489,"long":7.0937,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Andrew Johnson",'city':'Phoenix',"country":"california","lat":51.4173,"long":7.9071,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Ted JAmes",'city':'Phoenix',"country":"california","lat":50.4072,"long":7.3824,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Michele Thompson",'city':'Phoenix',"country":"california","lat":51.3182,"long":6.9023,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Zed Bishop",'city':'Phoenix',"country":"california","lat":51.5175,"long":7.5804,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Tina Adams",'city':'Phoenix',"country":"california","lat":51.5501,"long":5.7821,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Igor Minar",'city':'Phoenix',"country":"california","lat":51.3148,"long":8.6024,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Brad Green",'city':'Phoenix',"country":"california","lat":50.2008,"long":7.4937,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Misey Havery",'city':'Phoenix',"country":"california","lat":51.8041,"long":6.5542,"imgSrc":"../../../assets/img/user.png"
    },{
        "name":"Heedly Joah",'city':'Phoenix',"country":"california","lat":50.4316,"long":7.1,"imgSrc":"../../../assets/img/user.png"
    }]
            
}

