import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  text = {
    "number": "",
    "message": "",
  };
  posts: any;
  constructor(public navCtrl: NavController, public http: Http) {
    this.posts = null;

    this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=km&origins=570158&destinations=nus&key=AIzaSyBVXQmKg9DsI69_Vm_cnbhLWzXI8jG2SSA').map(res => res.json()).subscribe(data => {
      this.posts = data.rows[0].elements[0].distance.text;
      console.log(this.posts);
    })
  }
    sendSMS() {
      console.log("heelo")
  
  
  
      let search = new URLSearchParams();
      search.append('ID', '95270002');
      search.append('Password', 'hello123');
      search.append('Mobile', '6592223123');
      search.append('Type', 'A');
      search.append('Message', 'Hello');
  
      this.http.post('https://www.commzgate.net/gateway/SendMsg', search).subscribe(res => console.log(res.json.toString()));
  
    }
}
