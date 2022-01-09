import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  data = {
    email: "",
    fullName: "",
    user: "",
    pass: "",
    conf: "",
  };
  ngOnInit(): void {
    console.warn(
      document.getElementsByName('matlab')

    );

  }

}
