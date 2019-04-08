import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserLoadAction, UserRemoveAction, UserTypes, UserClearAction, UserSetAction, UserSaveAction } from './user.action';
import { USER_SELECT } from './user.const';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private store: Store<User>, private actions$: Actions) {}

  getUser(): Observable<User> {
    return this.store.pipe(select(USER_SELECT));
  }

  loadUser(id: number): void {
    this.store.dispatch(new UserLoadAction(id));
  }

  isSaveSuccess(): Observable<boolean> {
    return this.actions$.pipe(
      ofType(UserTypes.SaveSuccess)
    )
  }

  clearUser(): void {
    this.store.dispatch(new UserClearAction());
  }

  setUser(user: User): void {
    this.store.dispatch(new UserSetAction(user));
  }

  saveUser(user: User): void {
    this.store.dispatch(new UserSaveAction(user));
  }

  removeUser(id: number): void {
    this.store.dispatch(new UserRemoveAction(id));
  }
}
