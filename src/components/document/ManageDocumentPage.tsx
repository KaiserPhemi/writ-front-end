// reaxct libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import toastr from 'toastr';
import { bindActionCreators } from 'redux';

// components
import validateInput from '../../utilities/checkDocument';
import DocumentForm from './DocumentForm';
import * as documentActions from '../../actions/documentActions';

// interfaces 
import {
  IManageDocumentPageProps,
  IManageDocumentPageState
} from '../../interfaces/document';

/**
 * Manages document page
 * 
 * @class ManageDocumentPage
 * @return {any}
 */
class ManageDocumentPage extends React.Component<IManageDocumentPageProps, IManageDocumentPageState> {
  constructor(props) {
    super(props);
    this.state = {
      document: {},
      errors: {},
      saving: false,
    };
  }

  /**
   * Called during updating phase
   * 
   * @param {Object} nextProps
   * @return {any}
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.document.id !== nextProps.document.id) {
      this.setState({ document: Object.assign({}, nextProps.document) });
    }
  }

  /**
   * Update
   * 
   * @param {Object} event
   */
  public updateDocumentState = (event) => {
    const field = event.target.name;
    const document = this.state.document;
    if (event.target.id === 'content') {
      document.content = event.target.getContent();
    }
    document[field] = event.target.value;
    return this.setState({ document });
  }

  /**
   * Called if document is saved successfully
   * 
   * 
   */
  public saveSuccess = () => {
    this.redirect();
  }

  /**
   * Called when saving document fails
   * 
   * @memberof ManageDocumentPage
   * @param {Object} error
   * @return {boolean}
   */
  private saveFailure = (error) => {
    toastr.error(error);
    this.setState({ saving: false });
  }

  /**
   * Checks if document metadata exist
   * 
   * @memberof ManageDocumentPage
   */
  public isValid = () => {
    const data = {
      title: this.state.document.title,
      content: this.state.document.content,
      access: this.state.document.access
    };
    const { errors, isValid } = validateInput(data);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  /**
   * Handles saving of document
   * 
   * @memberof ManageDocumentPage
   * @param {Object} event
   */
  public saveDocument = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ saving: true, errors: {} });
      if (this.state.document.id) {
        this.props.actions.updateDocument(this.state.document)
            .then(this.saveSuccess.bind(this), this.saveFailure.bind(this));
      } else {
        this.props.actions.saveDocument(this.state.document)
          .then(this.saveSuccess.bind(this), this.saveFailure.bind(this));
      }
    }
  }

  /**
   * Handles redirection
   */
  public redirect = () => {
    this.setState({ saving: false });
    toastr.success('Document saved');
    this.context.router.push('/');
  }

  /**
   * Renders to the DOM
   * 
   * @memberof ManageDocumentPage
   * @return {any}
   */
  public render() {
    return (
      <div className="container">
        <DocumentForm
          onChange={this.updateDocumentState}
          onSave={this.saveDocument}
          document={this.state.document}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

const getDocumentById = (documents, id) => {
  const document = documents.filter(item => item.id === id);
  if (document) {
    return document[0];
  }
  return null;
};

const mapStateToProps = (state, ownProps) => {
    const documentId = ownProps.params.id;
    let document;
    if (documentId && state.documents.length > 0) {
      document = getDocumentById(state.documents, parseInt(documentId, 10));
    }
    return {
      document,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(documentActions, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ManageDocumentPage);
