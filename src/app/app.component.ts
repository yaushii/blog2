import { Component } from '@angular/core';
import * as firebase from  'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  constructor(){

    var firebaseConfig = {
      apiKey: "AIzaSyDLmoU9n-_hhOIB2sOxvBriMaBAaUl_BCQ",
      authDomain: "blog2-b8812.firebaseapp.com",
      databaseURL: "https://blog2-b8812.firebaseio.com",
      projectId: "blog2-b8812",
      storageBucket: "https://blog2-b8812.firebaseio.com/",
      messagingSenderId: "842826044044",
      appId: "1:842826044044:web:76d5642926a89beb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
}