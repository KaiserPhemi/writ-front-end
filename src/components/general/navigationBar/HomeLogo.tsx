// react libraries
import * as React from 'react';

// fixtures
import { imgUrl } from '../../../fixtures/imgUrl';

// interfaces
import { IHomeLogoProps } from '../../../interfaces/homeLogo';

/**
 * @desc
 * @param props props passed from parent component
 * @param props.onClick handler for an on-click the home button
 */
const HomeLogo: React.SFC<IHomeLogoProps> = ({ onClick }) => (
  <div
    role='link'
    className='main-logo-container'
    onClick={onClick}
  >
    <img
      className='home-logo'
      src={imgUrl}
      alt='home-logo'
    />
  </div>
);

export default HomeLogo;
