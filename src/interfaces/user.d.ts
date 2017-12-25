/**
 * @interface IUser
 */
export interface IUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string
  email: string;
  createdAt: string;
  roleId: string;
  role: any;
}

/**
 * @interface IEditUserRoleProps
 */
export interface IEditUserRoleProps {
  value: number;
  onChange: (event) => void;
}

export interface IListRowProps {
  user: IUser;
  deleteUser: () => void;
  authenticate: any;
  actions: any;
}

export interface IListRowState {
  user: IUser;
}