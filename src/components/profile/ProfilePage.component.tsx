// react libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import toastr from 'toastr';

// actions
import { getUser, updateUser } from '../../actions/profileActions';

// component
import ProfileForm from './ProfileForm.component';

// interfaces
import {
  IProfilePageProps,
  IProfilePageState
} from '../../interfaces/profile';

/**
 * Class component
 */
class ProfilePage extends React.Component<IProfilePageProps, IProfilePageState> {
  constructor(props: any) {
    super(props);
    this.state =
    {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
      }
    };
  }

  /**
   * Called after redering
   */
  componentWillMount() {
    this.props.getUser(this.props.userId);
  }

  /**
   * 
   * @param nextProps 
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({
        user: nextProps.user
      });
    }
  }

  /**
   * Handles change of state as a result of user input
   * 
   * @param {Object} event - Event object trigered by user
   */
  public onChange = (event) => {
    const field = event.target.id;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user });
  }

  /**
   * Handles submit events
   * @param {Object} event Event trigered by user
   */
  public onSubmit = (event) => {
    event.preventDefault();
    this.props.updateUser(this.state.user, this.props.userId);
    this.context.router.push('/');
    toastr.success('Profile updated successfully!');
  }

  /**
   * Render to the DOM
   * @return {Object}
   */
  public render() {
    const user = this.state.user;
    return (
      <div>
        <ProfileForm
          userProps={user}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.user.userId,
    user: state.user
  };
};

export default connect(mapStateToProps, null)(ProfilePage);
