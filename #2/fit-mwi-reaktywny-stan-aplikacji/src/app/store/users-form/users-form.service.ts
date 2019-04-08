import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { UsersFormClearAction, UsersFormSetAction } from './users-form.action';
import { USERS_FORM_SELECT } from './users-form.const';
import { UsersForm } from './users-form.model';

@Injectable()
export class UsersFormService {
  constructor(private store: Store<UsersForm>) {}

  getUsersForm(): Observable<UsersForm> {
    return this.store.pipe(select(USERS_FORM_SELECT));
  }

  clearUsersForm(): void {
    this.store.dispatch(new UsersFormClearAction());
  }

  setUsersForm(usersForm: UsersForm): void {
    this.store.dispatch(new UsersFormSetAction(usersForm));
  }
}
