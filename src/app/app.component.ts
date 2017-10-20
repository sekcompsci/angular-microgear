import { Component } from '@angular/core';
declare const Microgear;
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NETPIE';

  //---------- NETPIE Setting ----------//

  private microgear: any;
  private APPID = 'YOURAPPID';
  private APPKEY = 'YOURAPPKEY';
  private APPSECRET = 'YOURAPPSECRET';
  private ALIAS = 'microgear-angular';

  //------------------------------------//

  constructor() {

    //----------------- NETPIE Event ----------------- //

    this.microgear = new Microgear.create({
      key: this.APPKEY,
      secret: this.APPSECRET,
      alias: this.ALIAS
    });

    this.microgear.on('message', function (topic, msg) {
      console.log('topic: '+ topic + ' msg: ' + msg);
    });

    this.microgear.on('connected', function () {
      this.useTLS(true);
      this.subscribe('/#');

      console.log('Microgear is connected!');
    });

    this.microgear.connect(this.APPID);

    //------------------------------------------------//
  }
}
