// react libraries
import * as React from 'react';

// fixtures
import {imgUrl} from '../../../fixtures/imgUrl';

/**
 * @desc
 */
const HomeLogo:React.SFC  = () => {
  return (
    <div className='main-logo-container'>
      <img
        className='home-logo'
        src={imgUrl}
        alt="home-logo"
      />
    </div>
  )
}

export default HomeLogo;
