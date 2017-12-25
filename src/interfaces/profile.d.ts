import { IUser } from "./user";

export interface IProfileFormProps {
  userProps?: any;
  onChange?: (event) => void;
  onSubmit?: (event) => void;
}

export interface IProfilePageProps {
  userId: string;
  getUser: (userId: string) => void;
  updateUser: (user: object, id: string) => void;
}

export interface IProfilePageState {
  user: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }
}