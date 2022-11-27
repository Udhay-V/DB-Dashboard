import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedformComponent implements OnInit {
  profileform:FormGroup;

  constructor() {
    
    this.profileform = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      mobileno: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
      email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      address:new FormGroup({
        address1:new FormControl('', [Validators.required]),
        address2:new FormControl('', [Validators.required]),  
        pincode:new FormControl('', [Validators.required]),  
       }),
    });
   }

  ngOnInit(){
  }

  onSubmit():void {
  // console.log(this.profileform.value);

  let data = []
  data.push(this.profileform.value);
  console.log(data);

  }
}  

