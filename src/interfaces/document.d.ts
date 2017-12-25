/**
 * @interface Defines interface for document structure
 */
export interface IDocument {
  title: string;
  id: string;
  createdAt: string;
  ownerId: string;
  content: string;
  access: string;
  user: any;
}

export interface IManageDocumentPageProps {
  document: IDocument;
  actions: any;
}

export interface IManageDocumentPageState {
  document: any;
  errors: any;
  saving: boolean;
}

export interface IDocumentCardProps {
  document: IDocument;
  deleteDocument: (id) => void;
  currentUser: any; 
}

export interface IDocumentCardState {

}

export interface IDocumentDetailsProps {
  document?: IDocument;
  deleteDocument: (id) => void;
  currentUser: object;
}

export interface IDocumentDetailsState {
  
}

export interface IDocumentDetailsPageProps {
  document: IDocument;
  actions: object;
  auth: object;
}

export interface IDocumentDetailsPageState {
}

export interface IDocumentFormProps {
  document: IDocument;
  onSave: any;
  onChange: any;
  saving: boolean;
  errors: any;
}

export interface IDocumentFormState {

}

export interface IDocumentListProps {
  documents: Array<IDocument>;
  deleteDocument: () => void;
  currentUser: object;
  filtered: boolean;
  notFiltered: Array<object>;
}

export interface IDocumentPageProps {
  auth: any;
  documents: Array<IDocument>;
  fetchDocuments: () => void;
  deleteDocument: (id) => void;
  metadata: any;
  searchDocuments: () => void;
  search: Array<object>;
}

export interface IDocumentPageState {
  renderedDocuments: Array<IDocument>;
  filtered: boolean;
  access: string;
  isSearching: false;
}