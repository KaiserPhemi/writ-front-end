// react libraries
import * as React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';

// actions
import { deleteDocument } from '../../actions/documentActions';

// interface
import {
  IDocumentCardProps,
  IDocumentCardState
} from '../../interfaces/document';

/**
 * @class DocumentCard
 * @return {any}
 */
class DocumentCard extends React.Component<IDocumentCardProps, IDocumentCardState> {
  constructor(props) {
    super(props);
  }

  /**
   * Handle document deletion
   *
   * @param  {Number} documentId - Id of the document to delete
   * @return {void}
   */
  public deleteDocument = (documentId) => {
  }

  /**
   * Renders to the DOM
   *
   * @memberof DocumentCard
   * @return {any}
   */
  public render() {
    const { document, currentUser } = this.props;
    const { firstName, lastName } = document.user ||
      { firstName: '', lastName: '' };

    return (
      <div className="col s4">
        <div className="card main-box">
          <div className="card-content white-text doc-box">
            <span className="card-title">{document.title}</span>
            <p>Access: &nbsp; <span>{(document.access)}</span></p><br />
            <div>
                Published Date :
              <p>{(document.createdAt) ?
                document.createdAt.split('T')[0] : ''}</p>
              <p> Author:
                  {firstName } { lastName }</p>
            </div>
          </div>
          <div className="card-action">
            <Link to={`/document/${document.id}/details`}>
                Details
            </Link>
            {currentUser.userId === document.ownerId &&
              <div className="right">
                <Link className="edit" to={`/document/${document.id}/edit`}>
                  Edit
                </Link>
                <Link
                className="delete"
                to="/"
                onClick={() => this.deleteDocument(document.id)}>
                  Delete
                </Link>
              </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentCard;
