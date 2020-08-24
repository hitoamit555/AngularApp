# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

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

------------Steps 
//https://stackoverflow.com/questions/51629897/java-8-filter-mapstring-listemployee


Angular links 

https://www.youtube.com/watch?v=b4pjjftApmY&list=PLA7e3zmT6XQV-cpMmPzjI1GyVHZIsHLiH

Route
https://www.youtube.com/watch?v=QV7ke4a7Lvc

TODO: UI
https://www.youtube.com/watch?v=lYMKywB46go


Step to crate new Angular App
Firs Need to install Nodejs/NPM and then Angular CLI
1.Download  Node (latest)
https://nodejs.org/en/
npm install/update


2.Install Angular CLI
https://angular.io/cli
npm install -g @angular/cli@latest
npm install -g @angular/cli
npm install -g @angular/cli@1.7.4

check Version: ng version
ng latest 9.1.7
npm 12


3.Cteate new Project
ng new my-first-project
>it will ask do u want to add Angular Route : No
>Select css one
cd my-first-project
ng serve
open this  is route link
http://localhost:4200/

4.Do changes into Src-App-component.html
<h> Hello<h>
Save -Auto Restart 4200 if html

5.Structure of Angular Proj
Proj-Src-App-AllTypes of files(comp.html/component/service/module/class/enum/interface/directive/guard/pipe
Proj-Src- main.ts
project-
{karma.ts (testcase))
package.json
package-lock.json(delete before push)
Note: All file inside App will start from app.comp.ts/app.module.ts /app.module.ts but not class



5.Create Classs(--skipTests=true instead of --spec false in 8/9)
ng g class model/employee --skipTests=true (angular 7/8/9)
ng g class model/employee --spec false(angular 6)
Skip : employee.spec.ts(Test classs for employee)
Note:
g for Generate here 
g for global incase fo npm -g install 

After modifying any new nodule/comp need to add import into  module.ts
then install below module
npm install --save @angular/material




employee.spec.ts
don't want to create spec file





if ng not work
-----------
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest

or
"start": "ng serve --host 0.0.0.0 --port 4201"
npm start ng s





-----------------
