import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/button.component';

const ModalList = ({ isShowing, hide, onClick }) => {
  if (isShowing) {
    return ReactDOM.createPortal(
      <div>
        <div className="modal-overlay" />
        <div
          className="modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-header">
            <span
              type="button"
              className="modal-close-button"
              aria-label="Close"
              onClick={hide}
              aria-hidden="true"
            >
              &times;
            </span>
          </div>
          <div className="modal">
            <h4 className="text-headline">DELETE BATCH</h4>
            <p className="p1">Are you sure?</p>
            <p className="p2">Do you really want to delete the batch?</p>
            <div className="buttons-wrapper">
              <Button type="danger" size="large" onClick={onClick}>
                Delete
              </Button>
              <Button type="secondary" size="large" onClick={onClick}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>,
      document.body,
    );
  }
  return null;
};
export default ModalList;
