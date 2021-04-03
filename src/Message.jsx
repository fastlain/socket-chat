import React from 'react';
import './Message.scss';
import cx from 'classnames';

function Message({ content, username, isOwnMsg }) {
  const ownerClass = isOwnMsg ? 'owned' : '';
  return (
    <div className={cx('message', ownerClass)}>
      {!isOwnMsg && <span className='username'>{username}</span>}
      <span className={cx('content', ownerClass)}>{content}</span>
    </div>
  );
}


export default Message;