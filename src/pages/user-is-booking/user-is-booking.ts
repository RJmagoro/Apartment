import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PEOPLE } from '../../mocks/person.mocks';
/**
 * Generated class for the UserIsBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-user-is-booking',
  templateUrl: 'user-is-booking.html',
})
export class UserIsBookingPage {
  name: string;
  peopleList=PEOPLE;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=navParams.get("variable");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserIsBookingPage');
  }
  userLogout(){
    firebase.auth().signOut().then(User =>{
      this.navCtrl.push("HomePage");
    });
  } 

}
