import React,{Component} from 'react';

class ReflectionForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date:'',
            reflection:'',
            confidenceLevel:'',
            confidenceText:'',
            reflectionList:[],
         }
    }

    handleInputs = (event) =>{

    }

    handleSubmission = (event) =>{
        event.preventDefault();

    }

    render() { 
        return ( 
            <div>
                <h2>Reflection Form</h2>
            </div>
         );
    }
}
 
export default ReflectionForm;