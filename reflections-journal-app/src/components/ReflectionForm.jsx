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
        //function to push current state of each property into above array 
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
                <form action="">
                    <fieldset>
                        <legend>New Reflection</legend>
                        <div className='formSpace'>
                            <label htmlFor="date">Date: </label>
                            <br/>
                            <input type="date" id='date' name='date' value={this.state.date} onChange={this.handleInputs} className='dateInput'/>
                        </div>
                        <div className='formSpace'>
                            <label htmlFor="reflection">Reflection: </label>
                            <br/>
                            <textarea name="reflection" id="reflection" cols="42" rows="10" value={this.state.reflection} onChange={this.handleInputs} className='inputs' placeholder=" Reflect on what you've learned, how you feel, and your plans for the upcoming days.."/>
                        </div>
                        <div className='formSpace'>
                            <select name="level" id="level" value={this.state.confidenceLevel} onChange={this.handleInputs} className='inputs'>
                            <option value="confidence">Confidence Level</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            </select>
                        </div>
                        <div className='formSpace'>
                            <label htmlFor="confidence">Confidence Description: </label>
                            <br/>
                            <textarea name="confidence" id="confidence" cols="36" rows="5" value={this.state.confidenceText} onChange={this.handleInputs} className='inputs' placeholder='Describe your confidence in your software developing skills at this point in time?'/>
                        </div>
                        <div className='formSpace'>
                            <button onClick={this.handleSubmission} >Save Reflection</button>
                        </div>
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default ReflectionForm;