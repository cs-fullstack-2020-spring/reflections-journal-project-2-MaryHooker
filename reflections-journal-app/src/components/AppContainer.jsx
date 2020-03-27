import React, { Component } from 'react';
import ReflectionForm from './ReflectionForm';
import ReflectionDisplay from './ReflectionDisplay';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reflectionList: [],
        }
    }
    
    //call back function to update state of array when passed down to child
    updateArray = (newArray) => {
        this.setState(
            {
                reflectionList: newArray
            }
        )
    }

    render() {
        return (
            <div>
                <h1> Daily Reflections</h1>
                <div className='container'>
                    <div>
                        <ReflectionForm updateArray={this.updateArray} />
                    </div>
                    <div>
                        <ReflectionDisplay reflectionList={this.state.reflectionList} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;