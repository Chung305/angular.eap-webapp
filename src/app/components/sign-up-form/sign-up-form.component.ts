import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/model/sign-up';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  countries: {};
  states: {};
  signUpForm: SignUp = new SignUp();

  constructor(
    private signUpService: SignUpService
  ) { }

  ngOnInit(): void {
    this.signUpService.getCountries().subscribe(data => this.countries = data);
    console.log(this.countries);
  }

  submitSignUpForm() {
    this.signUpForm.signedUpDate = Date();

    this.signUpService.signUp(this.signUpForm)
      .subscribe((data) => this.signUpForm == null
      );
    console.log(this.signUpForm);


  }

  onChangeCountry(countryName: string) {
    if (countryName) {
      this.signUpService.getStates(countryName).subscribe(
        data => {
          this.states = data;
        
        }
      );
    } else {
      this.states = null;
    }
  }

}
