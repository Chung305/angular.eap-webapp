# OBC Early Access Program Page
The purpose of this program is to be able to still 
adapt our starting user base and customer base while simultaneously taking the 
pressure off of delivering a fully featured application at the inception of this program on the business. 

EAP description:
https://docs.google.com/document/d/1hXuiEvhazRrRApapwT8_6CE236TeOWBiaXF4ppGd7Ok/edit?usp=sharing
## Details
### Short Description of Project
This Angular project is going to be used to funnel sign ups for the Early Access Program. The user will be filling out a form of their information (info needed TDB), have buttons pointing them to our social media pages, and information about the EAP/OBC.


### Project Requirements
Here is a list of requirements for project completion (subject to change):
- Must be one page with the possibility of adding more pages
- No header navigation should be shown
- Must contain sign up form with the following fields (* = required fields for user)
    - Name* (Full name)
    - Email*
    - Phone Number
    - City
    - State
    - Country (keep in mind there will be sign ups from other countries)
    - Zip code
        - If the project automatically asks their browser for their location you may not need to have the last 4 fields in the form
    - Team or Player* (this should be a radio button)
    - Check box to sign up for email updates
- Sign Up form must be validated
    - User must not be able to submit without entering required fields
    - User must not be able to submit without valid entered email
    - If other fields are filled out, they must have valid data for their respective field (i.e. country should not be "19802")
- Service must be created to send sign up form data to back end (backend created separately)
- Sign in form data payload going to the backend must have these fields in addition to the sign in form data:
    - Time of form submission
    - 
- Logo should be easily seen at the top of the page
- Display countdown to release of EAP
    - This could be a component from NPM but date TBD
- Links to social media accounts must be shown
    - FB: 
    - IG: 
    - Email: 
- Short description of the Early Access Program must be present
- Colors must be consistent with EAP colors

## Resources for development
UI Ideas and code: www.codepen.io

Good UI library that we are using in the EAP: www.primeng.com

## Git branching description
- `master` will only be used for code ready to release
- `develop` will be used throughout development as a general branch
- After first evaluation, features shall be worked on through feature branches (name: `feature/<name-of-feature>`) for readability and management


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Contact Frankie or Leon on any questions relating to this project.
