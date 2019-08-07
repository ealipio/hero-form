import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export interface LikeProps {}

export interface LikeState {}

class Like extends React.Component<LikeProps, LikeState> {
  render() {
    return <FontAwesomeIcon icon={faHeart} />;
  }
}

export default Like;
