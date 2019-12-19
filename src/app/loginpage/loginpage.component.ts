import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private http:HttpClient) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }
  
  

  login() {
    console.log(this.loginForm.value);
    this.http.post("http://localhost:3000/login", this.loginForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          let recievedData = data;
          alert(recievedData.message);
        }, (err) => {
          console.log(err);
        });
  }


}
