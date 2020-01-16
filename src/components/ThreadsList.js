import React from 'react';
import Thread from './Thread';

const ThreadsList = ({threads}) => {

    //console.log(threads);
    return (
        <Thread thread={threads[0]} />
    )
}

export default ThreadsList;