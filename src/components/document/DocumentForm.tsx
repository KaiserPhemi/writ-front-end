// react libraries
import * as React from 'react';

// third-party libraries
import { Row, TextField } from 'material-ui';
import TinyMCE from 'react-tinymce';

// interface
import{
  IDocumentFormProps,
  IDocumentFormState
} from '../../interfaces/document';

/**
 * @class DocumentForm
 * @param param0
 */
class DocumentForm extends React.Component<IDocumentFormProps, IDocumentFormState> {
  constructor(props: any) {
    super(props);
  }

  /**
   * Renders to the DOM
   *
   * @memberof DocumentForm
   * @return {any}
   */
  public render() {
    const {
      document,
      errors,
      onChange,
      onSave,
      saving
    } = this.props;

    return (
      <form className="container">
        <h5 className="center" style={{ margin: 20 }}>
          Create/Update a Document
        </h5>
        <Row>
          <div className="input-field col s12 margin-btm">
            <TextField
              label="Title"
              validate
              name="title"
              onChange={onChange}
              value={document.title}
              id="title"
            />
            {errors.title && <span className="red-text">Enter Title</span>}
          </div>
          <div className="input-field col s12 margin-btm">
            <TinyMCE
              id="content"
              content={document.content}
              config={{
                plugins: 'autolink link image lists print preview',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
              }}
              onChange={onChange}
            />
            {errors.content && <div className="red-text">Enter Content</div>}
          </div>
          <div className="input-field col s12 margin-btm">
            <select
              style={{ display: 'block' }}
              id="access"
              value={document.access}
              onChange={onChange}
              name="access"
            >
              <option>Select Access</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="role">Role</option>
            </select>
          </div>
          <div className="input-field col s12 margin-btm">
            <TextField
              type="submit"
              disabled={saving}
              value={saving ? 'Saving...' : 'Save'}
              className="btn waves-effect waves-light blue"
              onClick={onSave}
            />
          </div>
        </Row>
      </form>
    );
  }
}

export default DocumentForm;
