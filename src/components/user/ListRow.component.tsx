// react libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
// import * as  moment from 'moment';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';

// action types
import * as allActions from '../../actions/index';

// components
import EditUserRole from './EditUserRole.component';

// interface
import { IListRowProps, IListRowState } from '../../interfaces/user';

class ListRow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: Object.assign({}, props.user)
    };
  }

  /**
   * Handles change of state
   */
  public onChange = (event) => {
    event.preventDefault();
    const field = event.target.name,
      user: any = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
    this.props.actions.updateUser(user);
    toastr.success('Role was updated successfully');
    this.context.router.push('/user');
  }

  /**
   *
   * @param userid
   */
  public deleteUser = (userid) => {
    swal({
      title: 'Are you sure you want to delete this User?',
      text: ' Press cancel to quit this operation',
      icon: 'warning',
      buttons: [true, 'Yes, delete it', true],
      // showCancelButton: true,
      closeOnClickOutside: true,
    // }, (isConfirm) => {
    //   if (isConfirm) {
    //     this.props.actions.deleteUser(userid);
    //     swal('Deleted!',
    //     'User has been deleted successfully!', 'success');
    //     window.location.reload();
    //     this.context.router.push('/user');
      // } else {
      //   swal('Cancelled', 'User not deleted :)', 'error');
      // }
    });
  }

  /**
   * renders to the DOM
   * @return {Object}
   */
  public render() {
    const { user, authenticate } = this.props;

    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{authenticate.user.userId !== user.id ? <EditUserRole
            value={parseInt(this.state.user.roleId, 10)}
            onChange={this.onChange} /> : <span>{user.role.title}</span>
          }
        </td>
        <td>{authenticate.user.userId !== user.id &&
          <Link
            to="/user"
            onClick={() => this.deleteUser(user.id)}>
            Delete
          </Link>}
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticate: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch)
  };
};

export default ListRow;
// connect(mapStateToProps, mapDispatchToProps)(
