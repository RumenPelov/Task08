import React, { useState } from 'react';
import Message from './Message';

const Thread = ({thread}) => {
    const [collapsed, setCollapsed] = useState(thread.length > 1 ? true : false);

    const renderThreads = () => {
        return thread.map(( msg, index, arr) => {
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
        <div className="thred" onClick={() => setCollapsed(false)}>
            {renderThreads() }
        </div>
    )
}

export default Thread;