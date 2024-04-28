import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'client';
  Users: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:7077/api/Users').subscribe({
      next: (response) => (this.Users = response),
      error: (error) => console.log(error),
      complete: () => console.log('Request has completed'),
    });
  }
}
