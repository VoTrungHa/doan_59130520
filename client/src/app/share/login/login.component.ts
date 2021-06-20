import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../core/login/login.service';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { StateStorageService } from 'src/app/core/auth/state-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  stataValidator = false;
  selectedProfile;
  message: string;
  constructor(
    public modal: NgbActiveModal,
    private loginService: LoginService,
    private ngmodal: NgbModal,
    private router: Router,
    private StateStoreService: StateStorageService
  ) {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      remeberMe: new FormControl(false),
    });
  }
  get username() {
    return this.formLogin.get('username');
  }
  get password() {
    return this.formLogin.get('password');
  }
  ngOnInit(): void {}

  setValidator() {
    this.stataValidator = true;
  }
  login() {
    localStorage.setItem('remeberMe', this.formLogin.get('remeberMe').value);
    this.loginService
      .login(this.formLogin.value)
      .then(() => {
        const account = JSON.parse(localStorage.getItem('listProfiles'));
        this.modal.dismiss('login success');
        this.selectedProfile = account;
        // this.NgxService.stop();
        this.goToDashboard();
        console.log(this.selectedProfile);
      })
      .catch((error) => {
        this.message = error.error.message;
      });
  }
  register() {
    this.modal.dismiss();
    let modals = this.ngmodal.open(RegisterComponent, {
      centered: true,
      size: 'sm',
    });
  }

  goToDashboard() {
    let urlPre = this.StateStoreService.getUrl();
    if (urlPre) {
      this.router.navigate([urlPre]);
      this.StateStoreService.storeUrl(null);
    } else {
      this.router.navigate(['/trangchu']);
    }
  }
}
