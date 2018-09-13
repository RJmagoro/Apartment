import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }
  book(){
    this.navCtrl.push("BookingsPage");
  }
  cancel(){
    this.navCtrl.push("CancelPage");
  }
  userLogout(){
    firebase.auth().signOut().then(User =>{
      this.navCtrl.push("HomePage");
    });
  
  }

}
