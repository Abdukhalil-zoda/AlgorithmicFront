import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpClient) { }
  data = {
    user: "",
    pass: "",

  };
  ngOnInit(): void {
    this.data.user = "";
    this.data.pass = "";
  }

}