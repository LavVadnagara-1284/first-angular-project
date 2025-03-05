import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    users = [
        {
            id: '1',
            name: 'Lav Vadnagara',
            age: 23,
            email: 'Lav.Vadnagara@example.com',
        },
        {
            id: '2',
            name: 'Jhanvi Acharya',
            age: 24,
            email: 'Jhanvi.Acharya@example.com',
        },
        {
            id: '3',
            name: 'Purvraj Barot',
            age: 23,
            email: 'Purvraj.Barot@example.com',
        },
        {
            id: '4',
            name: 'Rudra Patel',
            age: 21,
            email: 'Rudra.Patel@example.com',
        },
        {
            id: '5',
            name: 'Yash Patel',
            age: 22,
            email: 'Yash.Patel@example.com',
        },
    ];
}
