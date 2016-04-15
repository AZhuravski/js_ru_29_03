import React, { Component, PropTypes } from 'react'
require('./style.css')

function Comment(props) {
    return (
        <div className="comment-body">
            {props.comment.id} - {props.comment.text}
        </div>
    )
}

export default Comment