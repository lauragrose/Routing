import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import { getUsers } from '../user.service';
import { Route } from '@angular/router';

@Component({
    selector: 'app-utenti',
    templateUrl: './utenti.component.html',
    styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {
    users: Users[] = [];

    constructor() {
        getUsers().then((users) => {
            this.users = users;
        });
    }

    ngOnInit(): void {
    }

}
