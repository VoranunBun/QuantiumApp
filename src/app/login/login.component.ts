import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputForm: FormGroup;

  constructor(private router: Router) { 
    let username = new FormControl('', [Validators.required, Validators.maxLength(250)]);
    let password = new FormControl('', [Validators.required, Validators.maxLength(250)]);

    this.inputForm = new FormGroup({
      username: username,
      password: password,
    });

  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.router.navigate(["/home"]);
  }
}
