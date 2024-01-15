import { Component } from '@angular/core';
import { EnrollService } from './enroll.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  userModel = new User( '','')
 constructor(private _enrollservice:EnrollService){}


  onsubmit(){
    this._enrollservice.enroll(this.userModel).subscribe
    ( data => console.log('success',data),
      Error => console.error(Error)
      
    );
  }
}
