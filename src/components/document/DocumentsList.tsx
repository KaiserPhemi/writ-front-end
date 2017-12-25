// react libraries
import * as React from 'react';

// third-party libraries
import DocumentCard from './DocumentCard';

// interface
import { IDocumentListProps } from '../../interfaces/document';

/**
 * Component defined as a function.
 */
const DocumentsList: React.SFC<any> = ({ documents,
  deleteDocument, currentUser, filtered, notFiltered }) => {
  const emptyMessage = (<p>No documents Found</p>),
    isFiltered = filtered ? documents : notFiltered,
    documentsList = (
      <div>
        {isFiltered.map(allDocuments => <DocumentCard
        document={allDocuments}
        deleteDocument={deleteDocument}
        currentUser={currentUser} />)}
      </div>
    );
  return (
    <div className="row">
      {isFiltered.length > 0 ? documentsList : emptyMessage}
    </div>
  );
};

export default DocumentsList;
