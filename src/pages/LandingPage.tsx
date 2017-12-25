// react libraries
import * as React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import DocumentsPage from '../components/document/DocumentsPage';

// interface
import { ILandingPageProps, ILandingPageState } from '../interfaces/landingPage';

/**
 * @desc Displays the landing page
 * @class LandingPage
 * @extends {React.Component<ILandingPageProps, ILandingPageState>}
 * @return {any}
 */
class LandingPage extends React.Component<ILandingPageProps, ILandingPageState> {
  constructor(props: any) {
    super(props);
  }


  public componentDidMount() {
    console.log("this is the props: ", this.props);
    console.log("this is the state: ", this.state)
  }

  /**
   * @desc Renders to the DOM
   * @return {any}
   */
  public render() {
    // const { isAuthenticated } = this.props.auth;
    const isAuthenticated = false;
    return (
      <div className="main">
      {!isAuthenticated &&
        <div className="banner">
          <div className="landing-page" >
            <div className="row white-text">
              <div className="center-align">
                <h3>Welcome to doqMan</h3>
                <h4 className="thin">
                  <p>A platform to create, share and manage all your business documents online.
                  </p>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="center-align">
                    <Link id="signup" className="btn btn-large waves-effect get-started-btn teal darken-4" to="/signup">
                      Get Started
                    </Link>
                    <p className="white-text">
                      Already a user?
                      <Link to="/login">Login</Link>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {isAuthenticated && <DocumentsPage />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(LandingPage);
