// react libraries
import * as React from 'react';

/**
 * 
 */
class About extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  /**
   * 
   */
  public render() {
    return (
      <div className="s12 center about-page container">
        <h3>About</h3>
          <p>
            Doqman lets you create, store and update documents on the fly online.
          </p>
      </div>
    );
  }
}

export default About;
