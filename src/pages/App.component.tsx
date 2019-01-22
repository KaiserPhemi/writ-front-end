// react libraries
import * as React from 'react';

// components
import LandingPage from './LandingPage';
import NavigationBar from '../common/NavigationBar.component';
import FooterPage from '../components/shared/FooterPage.component';

/**
 * @desc Main entry point for all components
 * @public
 * @class App
 * @return {any}
 */
class App extends React.Component<any, any> {

  /**
   * @desc Render method
   * @memberof App
   * @return {any}
   */
  public render() {
    return(
      <div>
        <NavigationBar />
        {this.props.children}
        <FooterPage />
      </div>
    );
  }
}

export default App;
