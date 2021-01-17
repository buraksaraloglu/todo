import React from 'react';
import PropTypes from 'prop-types';

import { AiFillDelete } from 'react-icons/ai';

import './c-delete-button.scss';

const DeleteButton = ({ onDelete }) => (
  <div
    className="c-delete-button"
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        onDelete();
      }
    }}
    onClick={onDelete}
    role="button"
    tabIndex={0}
  >
    <AiFillDelete />
    <span>Delete</span>
  </div>
);

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
