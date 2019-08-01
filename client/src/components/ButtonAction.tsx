import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface ButtonActionProps {
  idItem: string;
  onHeaderClick: Function;
}

export interface ButtonActionState {}

class ButtonAction extends React.Component<
  ButtonActionProps,
  ButtonActionState
> {
  handleClick = () => {
    this.props.onHeaderClick();
  };

  render() {
    return (
      <button className="btn btn-danger" onClick={this.handleClick}>
        <FontAwesomeIcon icon={faTrash} /> {' '} Delete
      </button>
    );
  }
}

export default ButtonAction;
