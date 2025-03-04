import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    imports: [],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
})
export class ProfileComponent {
    userName: string | null = '';
    constructor(private route: ActivatedRoute) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.userName = this.route.snapshot.paramMap.get('name');
        // console.log(`Name: ${this.userName}`);

        this.route.queryParams.subscribe(params => {
          this.userName = params['name'];
          console.log(`Name: ${this.userName}`);
        })
    }
}
