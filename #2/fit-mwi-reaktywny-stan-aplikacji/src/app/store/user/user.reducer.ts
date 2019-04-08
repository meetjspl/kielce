import { UserActions, UserTypes } from './user.action';
import { User } from './user.model';

export const initialState: User = {
  id: 0,
  firstName: '',
  lastName: '',
  email: ''
};

export function UserReducer(state = initialState, action: UserActions): User {
  switch (action.type) {
    case UserTypes.Clear:
      return {
        ...initialState
      };

    case UserTypes.Set:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
