import React, { Component } from 'react';

class ReflectionDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h2>Reflection Display</h2>
                {
                    this.props.reflectionList.map((post,index) => {
                        return(
                            <div key={index}>
                                <p>Date: {post.date}</p>
                                <p>Reflection: {post.reflection}</p>
                                <p>Confidence Level: {post.confidenceLevel}</p>
                                <p>Confidence Description: {post.confidenceText}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        );
    }
}

export default ReflectionDisplay;