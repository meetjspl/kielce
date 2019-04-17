import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@store/user/user.model';
import { UsersService } from '@store/users/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fit-users-grid',
  templateUrl: './users-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersGridComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  ngOnDestroy(): void {
    this.usersService.clearUsers();
  }

  onRemoveClick(id: number): void {
    this.usersService.removeUser(id);
  }
}
