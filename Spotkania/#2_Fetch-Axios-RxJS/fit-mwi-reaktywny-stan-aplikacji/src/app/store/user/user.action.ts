import { Action } from '@ngrx/store';
import { User } from './user.model';

export enum UserTypes {
  Load = '[User] Load user',
  Clear = '[User] Clear user',
  Set = '[User] Set user',
  Save = '[User] Save user',
  SaveSuccess = '[User] Save user success',
  Remove = '[User] Remove user',
  RemoveSuccess = '[User] Remove user success'
}

export class UserLoadAction implements Action {
  readonly type = UserTypes.Load;
  constructor(readonly payload: number) {}
}

export class UserClearAction implements Action {
  readonly type = UserTypes.Clear;
}

export class UserSetAction implements Action {
  readonly type = UserTypes.Set;
  constructor(readonly payload: User) {}
}

export class UserSaveAction implements Action {
  readonly type = UserTypes.Save;
  constructor(readonly payload: User) {}
}

export class UserSaveSuccessAction implements Action {
  readonly type = UserTypes.SaveSuccess;
}

export class UserRemoveAction implements Action {
  readonly type = UserTypes.Remove;
  constructor(readonly payload: number) {}
}

export class UserRemoveSuccessAction implements Action {
  readonly type = UserTypes.RemoveSuccess;
}

export type UserActions = UserClearAction | UserSetAction;
