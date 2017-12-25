// react libraries
import * as React from 'react';

// interface
import { IEditUserRoleProps } from '../../interfaces/user';

/**
 * 
 * @param param0 
 */
const EditUserRole: React.SFC<IEditUserRoleProps> = ({ value, onChange }) => {
  return (
    <div className="input-field col s4">
      <select
        className="role-list"
        value={value}
        onChange={onChange}
        name="roleId"
        id="access"
      >
        <option value="1">admin</option>
        <option value="2">regular</option>
      </select>
    </div>
  );
};

export default EditUserRole;
