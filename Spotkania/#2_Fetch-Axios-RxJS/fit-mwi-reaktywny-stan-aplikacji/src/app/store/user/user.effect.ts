import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { iif, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  UserLoadAction,
  UserRemoveAction,
  UserRemoveSuccessAction,
  UserSaveAction,
  UserSaveSuccessAction,
  UserSetAction,
  UserTypes
} from './user.action';
import { User } from './user.model';

@Injectable()
export class UserEffect {
  constructor(private httpClient: HttpClient, private actions$: Actions) {}

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserTypes.Load),
    switchMap((action: UserLoadAction) =>
      this.httpClient.get(`http://localhost:3000/users/${action.payload}`).pipe(
        map((user: User) => new UserSetAction(user)),
        catchError(() => of({ type: 'SOME_ERROR' }))
      )
    )
  );

  @Effect()
  saveUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserTypes.Save),
    mergeMap((action: UserSaveAction) =>
      iif(
        () => !action.payload.id,
        this.httpClient.post(`http://localhost:3000/users`, action.payload).pipe(
          map(() => new UserSaveSuccessAction()),
          catchError(() => of({ type: 'SOME_ERROR' }))
        ),
        this.httpClient.put(`http://localhost:3000/users/${action.payload.id}`, action.payload).pipe(
          map(() => new UserSaveSuccessAction()),
          catchError(() => of({ type: 'SOME_ERROR' }))
        )
      )
    )
  );

  @Effect()
  removeUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserTypes.Remove),
    mergeMap((action: UserRemoveAction) =>
      this.httpClient.delete(`http://localhost:3000/users/${action.payload}`).pipe(
        map(() => new UserRemoveSuccessAction()),
        catchError(() => of({ type: 'SOME_ERROR' }))
      )
    )
  );
}
