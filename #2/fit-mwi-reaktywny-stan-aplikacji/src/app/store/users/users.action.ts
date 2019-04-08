import { Action } from '@ngrx/store';
import { User } from '@store/user/user.model';
import { UsersForm } from '@store/users-form/users-form.model';

export enum UsersTypes {
  Load = '[Users] Load users',
  Clear = '[Users] Clear users',
  Set = '[Users] Set users',
  Remove = '[Users] Remove user'
}

export class UsersLoadAction implements Action {
  readonly type = UsersTypes.Load;
  constructor(readonly payload: UsersForm) {}
}

export class UsersClearAction implements Action {
  readonly type = UsersTypes.Clear;
}

export class UsersSetAction implements Action {
  readonly type = UsersTypes.Set;
  constructor(readonly payload: User[]) {}
}

export class UsersRemoveAction implements Action {
  readonly type = UsersTypes.Remove;
  constructor(readonly payload: number) {}
}

export type UsersActions = UsersLoadAction | UsersClearAction | UsersSetAction | UsersRemoveAction;
