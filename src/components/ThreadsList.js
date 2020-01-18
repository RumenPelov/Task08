import React from 'react';
import Thread from './Thread';

const ThreadsList = ({threads}) => {

    const rendereList = () => threads.map((thread, i) => <Thread key={i} thread={thread} /> )

    return (
        <div>
            {rendereList()}
        </div>
    )
}

export default ThreadsList;