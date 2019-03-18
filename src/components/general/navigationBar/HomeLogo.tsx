// react libraries
import * as React from 'react';

// fixtures
import { imgUrl } from '../../../fixtures/imgUrl';

// interfaces
import { IHomeLogoProps } from '../../../interfaces/homeLogo';

/**
 * @desc
 * @param {object} props
 */
const HomeLogo: React.SFC<IHomeLogoProps> = ({ onClick }) => (
  <div
    className='main-logo-container'
    onClick={onClick}
  >
    <img
      className='home-logo'
      src={imgUrl}
      alt="home-logo"
    />
  </div>
);

export default HomeLogo;
