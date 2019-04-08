import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from '@store/user/user.model';
import { UsersForm } from '@store/users-form/users-form.model';
import { Observable } from 'rxjs';
import { UsersClearAction, UsersLoadAction, UsersRemoveAction } from './users.action';
import { USERS_SELECT } from './users.const';

@Injectable()
export class UsersService {
  constructor(private store: Store<User[]>) {}

  getUsers(): Observable<User[]> {
    return this.store.pipe(select(USERS_SELECT));
  }

  loadUsers(usersForm: UsersForm): void {
    this.store.dispatch(new UsersLoadAction(usersForm));
  }

  clearUsers(): void {
    this.store.dispatch(new UsersClearAction());
  }

  removeUser(id: number): void {
    this.store.dispatch(new UsersRemoveAction(id));
  }
}
