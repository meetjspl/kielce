import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserRemoveAction, UserRemoveSuccessAction, UserTypes, UserSaveSuccessAction } from '@store/user/user.action';
import { User } from '@store/user/user.model';
import { UsersForm } from '@store/users-form/users-form.model';
import { UsersFormService } from '@store/users-form/users-form.service';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { UsersLoadAction, UsersRemoveAction, UsersSetAction, UsersTypes } from './users.action';

@Injectable()
export class UsersEffect {
  constructor(private httpClient: HttpClient, private actions$: Actions, private usersFormService: UsersFormService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UsersTypes.Load),
    switchMap((action: UsersLoadAction) =>
      this.httpClient
        .get(
          `http://localhost:3000/users?firstName_like=${action.payload.firstName}&lastName_like=${action.payload.lastName}&email_like=${
            action.payload.email
          }`
        )
        .pipe(
          map((data: User[]) => new UsersSetAction(data)),
          catchError(() => of({ type: 'SOME_ERROR' }))
        )
    )
  );

  @Effect()
  removeUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UsersTypes.Remove),
    map((action: UsersRemoveAction) => new UserRemoveAction(action.payload))
  );

  @Effect()
  reloadUsersSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(UserTypes.RemoveSuccess, UserTypes.SaveSuccess),
    switchMap((action: UserRemoveSuccessAction | UserSaveSuccessAction) => this.usersFormService.getUsersForm()),
    map((usersForm: UsersForm) => new UsersLoadAction(usersForm))
  );
}
