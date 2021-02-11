// import { Component, OnInit } from '@angular/core';
// import { first } from 'rxjs/operators';

// import { UserService } from 'src/app/_services';

// @Component({
//   selector: 'app-list',
//   templateUrl: 'list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent implements OnInit {
//   users: null;
  
//   constructor(private userService: UserService) { }

//   ngOnInit() {
//     this.userService.getAll()
//             .pipe(first())
//             .subscribe(users => this.users = users);
//   }

//   deleteUser(id: string){
//     const user = this.users.find(x=>x.id === id);
//     user.isDeleting = true;
//     this.userService.delete(id).pipe(first()).subscribe(() => {
//       this.users = this.users.filter(x=> x.id !==id)
//     });
//   }

// }
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

 import { UserService } from 'src/app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
}