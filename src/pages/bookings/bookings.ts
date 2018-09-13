import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { PEOPLE } from '../../mocks/person.mocks';
import { Base64 } from '@ionic-native/base64';
/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {
  
  bookings: FormGroup;
name;
fname;
lname;
password;
email;
contactNo;
human={
fname:"",
lname:"",
password:"",
email:"",
  contactNo:"",
  
}

  constructor(private base64: Base64,private fb:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.bookings=this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      password:['',Validators.required],
      contactNo:['',Validators.required],
      email:['',Validators.required],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }
  userLogout(){
    firebase.auth().signOut().then(User =>{
      this.navCtrl.push("HomePage");
    });
  } 

  clickListner(){
    PEOPLE.push({fname:this.fname,lname:this.lname,password:this.password,contactNo:this.contactNo,email:this.email})
    this.navCtrl.push("UserIsBookingPage",{variable: this.name});
  }

}
