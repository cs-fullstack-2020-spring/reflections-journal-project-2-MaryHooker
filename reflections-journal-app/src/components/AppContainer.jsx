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
                <h1>Reflections</h1>
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