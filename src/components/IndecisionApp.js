import React       from 'react';
import AddOption   from './AddOption.js';
import Options     from './Options.js';
import Header      from './Header.js';
import Action      from './Action.js';
import OptionModal from './OptionModal.js';
//------------------imports----------------------------------------------------

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleDeleteOptions = () => {
        this.setState(() => {
            return { options: [] };
        });
    };
    
    handleClearSelectedOption = () => {
        this.setState(() => {
            return { selectedOption: undefined };
        });
    };
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };

    handlePick = () => {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const pickedOption = this.state.options[randomNum];
            this.setState(() => ({
                selectedOption: pickedOption
            }));
        });
    };

    handleAddOptionParent = (opt) => {
        if (!opt) {
            return 'Enter a valid value to add item.';
        } else if (this.state.options.indexOf(opt) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([opt])
            }
        });
    };
    
    //----React Component Lifecycle hooks - ONLY in Class based Components----
    componentDidMount(){
        console.log("--componentDidMount() --> fetching data!");
        
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            
        }
    }
    componentDidUpdate(prevProps, prevState){
        console.log("--componentDidUpdate() --> saving data!");
        // check to see if array actually changed
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            // set our option array to local storage as JSON data
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log("--componentWillUnmount()");
    }
    //----React Component Lifecycle hooks - ONLY in Class based Components----
    
    render(){
        //const title = 'Indesicion'; // replaced by Header.defaultProps
        const subtitle = 'The Computer 8-ball';
        //const options = ['Thing one', 'Thing two', 'Thing four']

        return(
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOptionParent={this.handleAddOptionParent}
                        />
                        <OptionModal 
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption={this.handleClearSelectedOption}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// default props for IndecisionApp: (NOT USED BECUASE OF LOCAL STORAGE)
// IndecisionApp.defaultProps = {
//     options: []
// };

//----------------------------IndecisionApp----------------------------------
export default IndecisionApp;