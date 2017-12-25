// react libraries
import * as React from 'react';

// component
import ListRow from './ListRow.component';

/**
 * Functional stateless component.
 */
const UsersList = ({ users, auth }): any => {
  // const emptyMessage = 'No user found';
  const usersRow = users.map((user) => {
    return (
      <ListRow
        user={user}
        key={user.id}
        auth={auth} />
    );
  });

  return (
    <div>
    {usersRow.length > 0 ?
      <table className="responsive-table bordered striped">
        <thead>
          <tr>
            <th>User ID</th>
            <th>UserName</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date Joined</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersRow}
        </tbody>
      </table> : <p>No user found</p>
    }
    </div>
  );
};

export default UsersList;
