import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserSignup } from 'src/data/User';
import * as shajs from 'sha.js';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import "rxjs"
import { map } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(
    public apiService: ApiService,
    public dialog: MatDialog) { }
  data = {
    email: "",
    fullName: "",
    user: "",
    pass: "",
    conf: "",
  };
  ngOnInit(): void {

  }
  openDialog(
    data: {
      title: string,
      message: string,
      icon: string
    }
  ): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      data: data,
    });
  }
  async signup() {
    if (
      this.data.fullName == "" ||
      this.data.email == "" ||
      this.data.pass == "" ||
      this.data.user == "" ||
      this.data.conf == ""
    ) {
      console.log(this.data.pass);

      this.openDialog(
        {
          title: "Error",
          message: "All inputs must be filled",
          icon: "error"
        }
      );
      return;
    }
    if (this.data.pass != this.data.conf) {
      this.openDialog(
        {
          title: "Error",
          message: "Password and confirm don't match",
          icon: "error"
        }
      );
      return;
    }
    try {

      var res = await this.apiService.signup(new UserSignup(
        this.data.fullName,
        this.data.user,
        this.data.email,
        shajs('sha256').update(this.data.pass).digest('hex')
      ));

    } catch (error) {

      this.openDialog(
        {
          title: "Error",
          message: (error as Error).message,
          icon: "error"
        }
      );
    }

  }


}
