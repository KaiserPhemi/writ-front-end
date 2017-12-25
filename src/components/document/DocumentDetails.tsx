// react libraries
import * as React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';

// interface 
import {
  IDocumentDetailsProps,
  IDocumentDetailsState
} from '../../interfaces/document';

/**
 * 
 * @param param0
 */
class DocumentDetails extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // ({ document, deleteDocument, currentUser })
  }

  /**
   * Renders to the DOM
   * 
   * @return {any}
   */
  public render() {
    const { document, deleteDocument, currentUser } = this.props;
    return (
      <div className="col s12 container">
        <div className="card">
          <div className="card-content indigo white-text">
            <span className="card-title">{document.title}</span>
            <p dangerouslySetInnerHTML={{ __html: document.content }}
              className="document-content" />
            <br />
            <p>Access Type: &nbsp;
              <span>{(document.access).toUpperCase()}</span></p><br />
            <div>
                Published Date :
              <p>{(document.createdAt) ?
                document.createdAt.split('T')[0] : ''}</p>
              <p id="owner">Author:
                {document.User.firstName} {document.User.lastName}</p>
            </div>
          </div>
          <div className="card-action">
            <Link to="/">back</Link>
            {currentUser.userId === document.ownerId &&
              <div className="right">
                <Link className="edit" to={`/document/${document.id}/edit`}>
                  Edit
                </Link>
                <Link className="delete" to="/"
                  onClick={this.props.deleteDocument(document.id)}>
                  Delete
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentDetails;
