// react libraries
import * as React from 'react';

// third-party libraries
import { Row, Input, Button } from 'material-ui';
import { Link } from 'react-router-dom';

// interfaces
import { ILoginFormProps } from '../../interfaces/login';

/**
 * Stateless Functional component
 */
const LoginForm: React.SFC<any> = ({ errors, onChange, loginProps, onSubmit }) => {
  return (
    <form className="container col s12 login-form"
      onSubmit={onSubmit} method="post">
        <Row className="container">
          {errors.form && <div className="error-message">{errors.form}</div>}
          <div className="z-depth-1 grey lighten-4 row card-panel">
            <h5 className="center teal-text">
              Please login into your account.
            </h5>
            <Input
              label="Enter your email"
              s={12}
              onChange={onChange}
              value={loginProps.email}
              name="email"
              type="email"
              id="email"
              className="validate"
            />
            <i className="small material-icons">email</i>
            <br />
            <br />
            <Input
              label="Enter your password"
              s={12}
              onChange={onChange}
              value={loginProps.password}
              name="password"
              type="password"
              id="password"
              className="validate"
            />
            <i className="small material-icons">lock</i>
            <div className="center">
              <Button
                id="login"
                type="submit"
                className="col s12 btn blue btn-large login-btn waves-effect"
              >
                Login
              </Button>
            </div>
            <span>
              Don’t have an account?
            </span>
            <Link to="/signup"> Create Account</Link>
          </div>
        </Row>
    </form>
  );
};

export default LoginForm;
