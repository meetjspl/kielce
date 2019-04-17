import { Action } from '@ngrx/store';
import { UsersForm } from './users-form.model';

export enum UsersFormTypes {
  Set = '[UsersForm] Set',
  Clear = '[UsersForm] Clear'
}

export class UsersFormSetAction implements Action {
  readonly type = UsersFormTypes.Set;
  constructor(readonly payload: UsersForm) {}
}


export class UsersFormClearAction implements Action {
  readonly type = UsersFormTypes.Clear;
}

export type UsersFormActions = UsersFormSetAction | UsersFormClearAction;
