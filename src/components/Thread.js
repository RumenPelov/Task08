import React from 'react';
import Message from './Message';

const Thread = ({thread}) => {
    const sortedThread = thread.map(msg =>  msg.score ? {...msg} : {...msg, score:1})
                            .sort((a, b) => b.score - a.score);
    const collapsed = sortedThread.length > 1 ? true : false;

    const renderThreads = () => {
        return sortedThread.map((msg, index, arr) => {
            const count = collapsed ? arr.length : 1;

            const offset = collapsed ? {
                top: `${(index)*3}px`,
                left: `${(index)*3}px`,
                zIndex: `${99-index}`
            } : {};
            
            return (
                <div key={index} 
                     style={ offset } 
                     className={index === 0 ? "expanded" :
                     collapsed ? "collapsed" : "expanded"} >
                    <Message msg={{msg, count, index}} /> 
                </div>
            )

            
        })
    } 

    return (
        <div className="thred">
            {renderThreads()}
        </div>
    )
}

export default Thread;