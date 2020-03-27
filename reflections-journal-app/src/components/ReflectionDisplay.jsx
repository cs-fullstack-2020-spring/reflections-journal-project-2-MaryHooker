import React, { Component } from 'react';

class ReflectionDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //component is iterating through the array passed down from the parent and returning a new component everytime the button is pressed
    render() {
        return (
            <div>
                <h2>Recent Reflections</h2>
                {
                    this.props.reflectionList.map((post,index) => {
                        return(
                            <div key={index} className='display'>
                                <p><span>Date:</span> {post.date}</p>
                                <p><span>Reflection:</span> {post.reflection}</p>
                                <p><span>Confidence Level:</span> {post.confidenceLevel}</p>
                                <p><span>Confidence Description:</span> {post.confidenceText}</p>
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