import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      let register = Object.assign({}, this.registerForm.value);
      this.auth.register(register).subscribe(
        (response) => {
          if (response.success) {
            this.toastr.success('Kayıt başarılı...', 'Başarılı');
            this.router.navigate(['/login']);
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

  goLogin() {
    this.router.navigate(['/login']);
  }
}
