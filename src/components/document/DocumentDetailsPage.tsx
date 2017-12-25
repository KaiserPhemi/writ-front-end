// react libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as documentActions from '../../actions/documentActions';

// components
import DocumentDetails from './DocumentDetails';

// interface 
import {
  IDocumentDetailsPageProps,
  IDocumentDetailsPageState
} from '../../interfaces/document';

/**
 * 
 */
class DocumentDetailsPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  /**
   * Called when deleting a document
   * 
   * @memberof DocumentDetailsPage
   * @param  {Number} id
   */
  public deleteDoc = (id) => {
    swal({
      title: 'Are you sure you want to delete this document?',
      text: 'Press cancel to quit this operation',
      icon: 'warning',
      // closeOnConfirm: true,
      // confirmButtonText: 'Yes, delete it!',
      // confirmButtonColor: '#ec6c62'
    // }, (isConfirm) => {
    //   if (isConfirm) {
    //     swal('Deleted!',
    //     'User has been deleted successfully!', 'success');
    //     this.props.actions.deleteDocument(id);
    //   } else {
    //     swal('Cancelled', 'Document not deleted :)', 'error');
    //   }
    });
  }

  /**
   * Renders to the DOM
   * @return {Object}
   */
  public render() {
    return (
      <div>
        <DocumentDetails
         document={this.props.document}
         deleteDocument={this.deleteDoc}
         currentUser={this.props.auth.user}
        />
      </div>
    );
  }
}

const getDocumentById = (documents, id) => {
  const document = documents.filter(item => item.id === id);
  if (document) return document[0];
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
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(documentActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDetailsPage);
