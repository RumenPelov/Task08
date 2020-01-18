import React from 'react';
import moment from 'moment'

const Massage = ({msg:{msg, count, index}}) => {
    const date = moment(msg.created_at).format("MMM Do");  
    const score = msg.score || 1; 

    return (
        <div className="message">
            <div className="message__subject">
                <h4 className={score >= 6 ? "high-rating" : "low-rating"}> {msg.subject} </h4>
                <p className="paragraph-small mb-small mt-small">{msg.question}</p>
                <p className="paragraph">{msg.text}</p>
                
            </div>
            <div className="message__team">
                <p className="paragraph-medium">{msg.team}</p>
                <p className="paragraph-small mt-small">{date}</p>
                <div className={count > 1 && index === 0 ? 
                                score >= 6 ? "msg-counter bg-high-rating" : "msg-counter bg-low-rating" 
                                : "hidden" }>{`${count} messages`}</div>
            </div>
        </div>
    
    )
}

export default Massage;