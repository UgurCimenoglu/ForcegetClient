import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let login = Object.assign({}, this.loginForm.value);
      this.auth.login(login).subscribe(
        (response) => {
          if (response.success) {
            localStorage.setItem('token', response.data.token);
            this.toastr.success('Giriş başarılı...', 'Başarılı');
            this.router.navigate(['/']);
          } else {
            this.toastr.error(response.message);
          }
        },
        (error) => {
          this.toastr.error(error.error.message);
        }
      );
    } else {
      console.log('Form Bilgilerini Kontrol Ediniz...');
    }
  }

  goRegister(){
    this.router.navigate(['register']);
  }
}
