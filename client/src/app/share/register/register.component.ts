import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterService } from './register.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginService } from 'src/app/core/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formLogin: FormGroup;
  stataValidator = false;
  selectedProfile;

  constructor(
    private registerService: RegisterService,
    public modal: NgbActiveModal,
    private ngmodal: NgbModal,
    private loadui: NgxUiLoaderService,
    private loginService: LoginService
  ) {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      repassword: new FormControl('', [
        Validators.required,
        this.passwordMatcher.bind(this),
      ]),
      status: new FormControl(false, [Validators.required]),
    });
  }
  private passwordMatcher(control: FormControl): { [s: string]: boolean } {
    if (
      this.formLogin &&
      control.value !== this.formLogin.get('password').value
    ) {
      return { passwordNotMatch: true };
    }
    return null;
  }
  get username() {
    return this.formLogin.get('username');
  }
  get password() {
    return this.formLogin.get('password');
  }
  get repassword() {
    return this.formLogin.get('repassword');
  }
  get status() {
    return this.formLogin.get('status');
  }
  ngOnInit(): void {}

  setValidator() {
    this.stataValidator = true;
  }
  register() {
    let data = this.formLogin.value;

    this.registerService.register(data).subscribe(
      (res) => {
        this.loadui.start();
        if (res.status == 200) {
          this.modal.dismiss('ok');
          this.loginService.login(this.formLogin.value).then(() => {
            const account = JSON.parse(localStorage.getItem('listProfiles'));
            this.modal.dismiss('login success');
            this.selectedProfile = account;
            // this.NgxService.stop();
            this.goToDashboard();
            //   console.log(this.selectedProfile);
          });
        }
        this.loadui.stop();
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }

  toLogin() {
    this.modal.dismiss();
    this.ngmodal.open(LoginComponent, { centered: true, size: 'sm' });
  }

  goToDashboard() {}
}
