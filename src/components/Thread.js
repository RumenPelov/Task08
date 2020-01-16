import React from 'react';
import Message from './Message';

const Thread = ({thread}) => {

    return (
        <Message msg={thread[0]}  />
    )
}

export default Thread;