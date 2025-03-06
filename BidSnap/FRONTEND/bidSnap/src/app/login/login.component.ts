import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Funkcija koja se poziva kada korisnik klikne na "Login"
  onSubmit() {
    console.log('Login button clicked.');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  
    // Poziv GET metode ka backend-u
    this.http.get(`http://localhost:3000/api/login/${this.username}/${this.password}`)
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          // Redirekcija na dashboard ako je login uspešan
          this.router.navigate(['/auction']);
        },
        (error) => {
          alert('Login failed!');
        }
      );
  }  
}
