import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserService } from "../user.service";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUsers().subscribe(data => {
        this.users = data;
      });
  }
}