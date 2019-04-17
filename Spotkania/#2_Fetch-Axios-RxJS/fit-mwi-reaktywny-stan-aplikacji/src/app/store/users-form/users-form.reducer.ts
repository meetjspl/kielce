import { UsersFormActions, UsersFormTypes } from './users-form.action';
import { UsersForm } from './users-form.model';

export const initialState: UsersForm = {
  firstName: '',
  lastName: '',
  email: ''
};

export function UsersFormReducer(state = initialState, action: UsersFormActions): UsersForm {
  switch (action.type) {
    case UsersFormTypes.Clear:
      return {
        ...initialState
      };

    case UsersFormTypes.Set:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
