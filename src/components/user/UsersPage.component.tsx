// react libraries
import * as React from 'react';

// third-party liraries
import { connect } from 'react-redux';
// import { Pagination } from 'react-materialize';

// actions
import { fetchUsers, deleteUser } from '../../actions/userActions';
import { searchUsers } from '../../actions/searchActions';

// component
import UsersList from './UsersList.component';
import Search from '../shared/SearchBox.component';

/**
 * Displays list of all users
 * 
 * @class UsersPage 
 * @return {any}
 */
class UsersPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      renderedUsers: props.users,
      filtered: false,
    };
  }

  /**
   * Fetches list of users
   * 
   * @memberof UsersPage
   */
  public componentWillMount() {
    this.props.fetchUsers();
  }

  /**
   * Handles list of all users
   * 
   * @memberof UsersPage
   * @param {Number} pageNumber - Page number
   */
  public displayUsers = (pageNumber) => {
    const offset = (pageNumber - 1) * this.props.metadata.pageSize;
    this.props.fetchUsers(offset);
  }

  /**
   * Handles search feature
   * 
   * @param {Object} event -Events from user input
   */
  public handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.value;
    this.props.searchUsers(query);
    const userSearchResult = this.props.search;
    if (query.trim().length > 0) {
      this.setState({ renderedUsers: userSearchResult });
    }
  }

  /**
   * Renders to the DOM
   * 
   * @memberof UsersPage
   * @return {any}
   */
  public render() {
    const {
      totalCount,
      pageSize,
      currentPage,
      pageCount,
    } = this.props.metadata;

    return (
      <div className="container">
        <h5 className="center">Registered Users</h5>
        <div className="col s7 push-s4">
            <Search onChange={this.handleSearch} />
        </div>
        <UsersList
          users={
            this.props.search.length > 0
            ?
            this.props.search
            :
            this.props.users
          }
          auth={this.props.auth}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let users = [];
  users = state.users;
  return {
    users,
    search: state.search,
    auth: state.auth,
    metadata: state.paginate,
  };
};

export default connect(mapStateToProps, null)(UsersPage);
