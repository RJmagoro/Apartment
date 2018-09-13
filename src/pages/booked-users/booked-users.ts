import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PEOPLE } from '../../mocks/person.mocks';
/**
 * Generated class for the BookedUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-booked-users',
  templateUrl: 'booked-users.html',
})
export class BookedUsersPage {
  name: string;
  peopleList=PEOPLE;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=navParams.get("variable");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookedUsersPage');
  }
  userLogout(){
    firebase.auth().signOut().then(User =>{
      this.navCtrl.push("HomePage");
    });
  } 

}
