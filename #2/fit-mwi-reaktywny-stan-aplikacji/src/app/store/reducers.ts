import { UserReducer } from './user/user.reducer';
import { UsersFormReducer } from './users-form/users-form.reducer';
import { UsersReducer } from './users/users.reducer';

export const reducers = {
  user: UserReducer,
  users: UsersReducer,
  // TODO[mwi] Think about moving this store to container user-form as feature of store
  usersForm: UsersFormReducer
};
