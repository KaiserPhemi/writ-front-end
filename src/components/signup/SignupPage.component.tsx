// react libraries
import * as React from 'react';
import { connect } from 'react-redux';

// third-party libraries
import SignUpForm from './SignUpForm.component';

// actions
import { signupRequest } from '../../actions/signupActions';

// helper functions
import validateInput from '../../utilities/validateInput';

/**
 * 
 */
class SignUpPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    };
  }

  /**
   * Checks events triggered from the form
   * @param  {Object} event
   */
  public onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * Validates user inputs
   * @return {Boolean}
   */
  public isValid = () => {
    const { errors, isValid } = validateInput.checkSignup(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * Forwards data to server
   * @param  {Object} event
   */
  public onSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.signupRequest(this.state)
        .then(
          () => {
            this.context.router.push('/');
          },
          ({ data }) => {
            const errors = {};
            this.state.errors.form = data.message;
            this.setState({ errors });
          });
    }
  }

  /**
   * DOM rendering
   * @return {Object}
   */
  public render() {
    const { errors } = this.state;

    return (
      <div className="row">
        <div className="col s8 offset-s2">
          <SignUpForm
            onChange={this.onChange}
            userProps={this.state}
            onSubmit={this.onSubmit}
            errors={errors}
          />
        </div>
      </div>
    );
  }
}

export default SignUpPage;
