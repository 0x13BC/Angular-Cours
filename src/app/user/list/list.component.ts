import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserService
  ) {

  }


  user: User = new User();
  toto: User[];


  ngOnInit() {

    this.userService.getAll().subscribe(
      (data) => {

      console.log(data);
      this.toto = data;
    },
      (err) => console.warn(err)
    )
    console.log(this.user);
  }
  


  
}
