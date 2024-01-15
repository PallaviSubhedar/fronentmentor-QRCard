import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  constructor(private fb :FormBuilder){}

//   registrationform = new FormGroup({
//   username : new FormControl(''),
//   password : new FormControl(''),
//   confirmpassword : new FormControl('')
//  })


registrationform  = this.fb.group({
  username : [''],
  password : [''],
  confirmpassword: ['']

})


}
