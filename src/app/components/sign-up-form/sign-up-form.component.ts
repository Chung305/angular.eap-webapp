import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/model/sign-up';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  signUpForm: SignUp = new SignUp();
  constructor(
    private signUpService: SignUpService
  ) { }

  ngOnInit(): void {
  }

  submitSignUpForm() {
    this.signUpForm.signedUpDate = Date();

    this.signUpService.signUp(this.signUpForm)
      .subscribe((data) => this.signUpForm == null
      );
    console.log(this.signUpForm);



  }

}
