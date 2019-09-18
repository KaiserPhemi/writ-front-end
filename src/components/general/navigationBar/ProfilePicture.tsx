// react libraries
import * as React from 'react';

// fixtures
import { dpUrl } from '../../../fixtures/imgUrl';


/**
 * @desc
 */
class ProfilePicture extends React.Component {

  /**
   * @desc
   */
  public render() {
    return (
      <div className='main-display-picture'>
        <img
          src={dpUrl}
          alt='dp'
        />
      </div>
    );
  }
}

export default ProfilePicture;
