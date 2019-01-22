import * as React from 'react';

// styles
import './slider.scss';

const SliderComponent: React.SFC<any> = () => {
  return (
    <label className='switch'>
      <input
        type='checkbox'
      />
      <span className='slider round' />
    </label>
  );
}

export default SliderComponent;
