// react libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';

// helper 
import validateInput from '../../utilities/ValidateInput';
import { login } from '../../actions/authActions';

// components
import LoginForm from './LoginForm';

// interface
import { ILoginPageProps, ILoginPageState } from '../../interfaces/login';

/**
 * Class component defined as this is a root component
 */
class LoginPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  /**
   * Checks client side input
   * 
   * @memberof LoginPage
   * @return {Boolean}
   */
  public isValid = () => {
    const { errors, isValid } = validateInput.checkLogin(this.state);
    if (!isValid) this.setState({ errors });
    return isValid;
  }

  /**
   * Handles submit event
   * 
   * @param {Object} event Event triggered
   */
  public onSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.login(this.state)
        .then(
          () => {
            this.context.router.push('/');
          },
          ({ data }) => {
            const errors: any = {};
            errors.form = data.message;
            this.setState({ errors });
          });
    }
  }

  /**
   * Handles change of state event
   * @param {Object} event Event triggered
   */
  public onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
   * Renders to the DOM
   * @return {Object}
   */
  public render() {
    const { errors } = this.state;

    return (
      <div>
        <LoginForm
          errors={errors}
          onChange={this.onChange}
          loginProps={this.state}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default LoginPage;
