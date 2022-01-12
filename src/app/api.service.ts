import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserSignup } from 'src/data/User';
import "rxjs";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  url = "https://localhost:7187";

  async signup(UserSignup: UserSignup) {

    var a = await axios.post(
      this.url + "/api/users/signup",
      UserSignup
    ).then(res => this.checkRes(res))




  }

  checkRes(res: any) {
    if (!res.data.ok) {
      throw new Error(res.data.data);

    }
    else {
      return res.data.data;
    }
  }

}
