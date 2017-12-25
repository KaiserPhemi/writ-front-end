// react libraries
import * as React from 'react';

// third-party libraries
import { Row, Input, Button } from 'material-ui';
import { Link } from 'react-router-dom';

/**
 * 
 * @param param0 
 */
const SignUpForm: React.SFC<any> = ({ onChange, userProps, onSubmit, errors }) => {
  return (
    <form className="col s12 container"
      onSubmit={onSubmit} method="post">
        <Row className="container">
          {errors.form && <div className="error-message">{errors.form}</div>}
          <div className="z-depth-1 grey lighten-4 row card-panel">
            <h5 className="center teal-text">Create Account</h5>
            <Input
              label="First Name"
              s={6}
              validate
              errors={errors.firstName}
              value={userProps.firstName}
              onChange={onChange}
              type="text"
              name="firstName"
            />
            <Input
              label="Last Name"
              s={6}
              validate
              errors={errors.lastName}
              value={userProps.lastName}
              onChange={onChange}
              type="text"
              name="lastName"
            />
            <Input
              label="Username"
              s={12}
              validate
              errors={errors.username}
              value={userProps.username}
              onChange={onChange}
              name="username"
            />
            <Input
              label="Email"
              s={12}
              validate
              errors={errors.email}
              value={userProps.email}
              onChange={onChange}
              type="email"
              name="email"
            />
            <Input
              label="Password"
              s={12}
              validate
              value={userProps.password}
              onChange={onChange}
              type="password"
              name="password"
            />
            <Input
              label="Re-type Password"
              s={12}
              validate
              value={userProps.passwordConfirmation}
              onChange={onChange}
              type="password"
              name="passwordConfirmation"
            />
            <Button
                id="signup"
                type="submit"
                className="btn col s12 blue darken-2 btn-large waves-effect"
              >
                Sign Up
            </Button>
            <span>
              Already have an account?
            </span>
            <Link to="/login"> Login</Link>
          </div>
        </Row>
    </form>
  );
};

export default SignUpForm;
