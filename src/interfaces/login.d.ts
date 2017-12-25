export interface ILoginFormProps {
  errors: object;
  onChange: () => void;
  onSubmit: () => void;
  loginProps: object;
}

export interface ILoginPageProps {
  login: () => void;
}

export interface ILoginPageState {
  email: string;
  password: string;
  errors: object;
}