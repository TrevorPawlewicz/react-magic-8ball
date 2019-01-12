import React from 'react';
//------------------imports----------------------------------------------------

export default class AddOption extends React.Component {
    // --------------OLD SYNTAX-----------------------------------------------
    // constructor(props){
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.state = {
    //         error: undefined
    //     }
    // }
    // handleAddOption(e) {
    //     e.preventDefault();
    // 
    //     let option = e.target.elements.option.value;
    //     option = option.trim(); // trim any leading or trailing spaces
    //     const error = this.props.handleAddOptionParent(option);
    // 
    //     // this.setState((prevState) => {
    //     //     return {
    //     //         error: error
    //     //     }
    //     // });
    // 
    //     // or one-liner:
    //     this.setState(() => ({ error }));
    // 
    //     if (!error) {
    //         // if no error, clear the input
    //         e.target.elements.option.value = '';
    //     }
    // }
    // --------------OLD SYNTAX-----------------------------------------------
    
    // New Babel's Class Properties syntax plugin (needs to be compiled with Babel/webpack):
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
    
        let option = e.target.elements.option.value;
        option = option.trim(); // trim any leading or trailing spaces
        const error = this.props.handleAddOptionParent(option);
    
        // this.setState((prevState) => {
        //     return {
        //         error: error
        //     }
        // });
    
        // or one-liner:
        this.setState(() => ({ error }));
    
        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    
    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
} //---------------------------AddOption--------------------------------------