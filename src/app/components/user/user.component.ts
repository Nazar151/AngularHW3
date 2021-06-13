import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user! : User;

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {}

  goToDetails(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }

}
