import { User } from '@store/user/user.model';
import { UsersActions, UsersTypes } from './users.action';

export const initialState: User[] = [];

export function UsersReducer(state = initialState, action: UsersActions): User[] {
  switch (action.type) {
    case UsersTypes.Set:
      return action.payload;

    case UsersTypes.Clear:
      return [];

    default:
      return state;
  }
}
