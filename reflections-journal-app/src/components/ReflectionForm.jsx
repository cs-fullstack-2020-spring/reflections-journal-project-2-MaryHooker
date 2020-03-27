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
    //function to update state when user inputs information
    handleInputs = (event) =>{
        if(event.target.name==='date'){
            this.setState({date:event.target.value})
        } else if(event.target.name==='reflection'){
            this.setState({reflection:event.target.value})
        } else if(event.target.name==='level'){
            this.setState({confidenceLevel:event.target.value})
        } else if(event.target.name==='confidence'){
            this.setState({confidenceText:event.target.value})
        }
    }
    //function to run everytime button is pressed
    handleSubmission = (event) =>{
        event.preventDefault();
        //function to push current state of each property into above array as an object
        this.state.reflectionList.push(
            {
                date:this.state.date,
                reflection:this.state.reflection,
                confidenceLevel:this.state.confidenceLevel,
                confidenceText:this.state.confidenceText,
            }
        )
        //globally update state of array
        this.setState(
            {
                reflectionList:this.state.reflectionList
            }
        )
        //sanity
        console.table(this.state.reflectionList)
        //lift state of aray to parent by pulling down call back function
        this.props.updateArray(this.state.reflectionList);
        
        //reset form
        this.setState(
            {
                date:'',
                reflection:'',
                confidenceLevel:'',
                confidenceText:'',
            }
        )
            
    }

    render() { 
        return ( 
            <div>
                <h2>Reflection Form</h2>
                <form action="">
                    <fieldset>
                        <legend>New Reflection</legend>
                        <div>
                            <label htmlFor="date">Date: </label>
                            <br/>
                            <input type="date" id='date' name='date' value={this.state.date} onChange={this.handleInputs}/>
                        </div>
                        <div>
                            <label htmlFor="reflection">Reflection: </label>
                            <br/>
                            <textarea name="reflection" id="reflection" cols="35" rows="10" value={this.state.reflection} onChange={this.handleInputs}/>
                        </div>
                        <div>
                            <select name="level" id="level" value={this.state.confidenceLevel} onChange={this.handleInputs}>
                            <option value="confidence">Confidence Level</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="confidence">Confidence Description: </label>
                            <br/>
                            <textarea name="confidence" id="confidence" cols="30" rows="5" value={this.state.confidenceText} onChange={this.handleInputs}/>
                        </div>
                        <div>
                            <button onClick={this.handleSubmission}>Save</button>
                        </div>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default ReflectionForm;