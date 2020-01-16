import React from 'react';

const Massage = ({msg}) => {
    const date = new Date(msg.created_at);
    const date_created = date.toLocaleDateString("en-GB", {month:'short', day:'numeric'})

    return (
        <div className="message">
            <div className="message__subject">
                <h4> {msg.subject} </h4>
                <p className="paragraph-small mb-small mt-small">{msg.question}</p>
                <p className="paragraph">{msg.text}</p>
                
            </div>
            <div className="message__team">
                <p className="paragraph-medium">{msg.team}</p>
                <p className="paragraph-small mt-small">{date_created}</p>
            </div>
        </div>
    
    )

}

export default Massage;