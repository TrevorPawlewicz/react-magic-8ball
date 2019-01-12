class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        // bind to the current component instance
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptionParent = this.handleAddOptionParent.bind(this);

        this.state = {
            options: []
        }
    }
    
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

    handleDeleteOptions(){
        this.setState(() => {
            return { options: [] };
        });
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick(){
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const pickedOption = this.state.options[randomNum];
            return console.log("pickedOption:", pickedOption);
        });
    }

    handleAddOptionParent(opt){
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
    }

    render(){
        //const title = 'Indesicion'; // replaced by Header.defaultProps
        const subtitle = 'The Computer 8-ball';
        //const options = ['Thing one', 'Thing two', 'Thing four']

        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOptionParent={this.handleAddOptionParent}
                />
            </div>
        );
    }
}

// default props for IndesicionApp: (NOT USED BECUASE OF LOCAL STORAGE)
// IndesicionApp.defaultProps = {
//     options: []
// };

//----------------------------IndesicionApp----------------------------------


// // Name needs to be uppercase!!!
// // our Header class extends the React Component class:
// class Header extends React.Component {
//     // then it MUST call the render method to work
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.subtitle}</h3>
//             </div>
//         );
//     }
// }

// use a Stateless Functional Component for classes that just call render()!!!
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
}

// set up default prop values with the keyword: defaultProps
Header.defaultProps = {
    title: 'Indecision'
}

//--------------------------Header-------------------------------------------

// use a Stateless Functional Component for classes that just call render()!!!
// Stateless Functional Components do NOT have access to this keyword
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }
//---------------------------Action------------------------------------------

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//             {
//                 this.props.options.map((op) => {
//                     return <Option key={op} optionText={op} />;
//                 })
//             }
//             <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All Options</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.options.map((op) => {
                return <Option key={op} optionText={op} handleDeleteOption={props.handleDeleteOption}/>;
            })
        }
        </div>
    );
}

//--------------------------Options------------------------------------------

// class Option extends React.Component {
//     render(){
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    // call function with text data:
                    props.handleDeleteOption(props.optionText);
                }}>
                Remove
            </button>
        </div>
    );
}
 //----------------------------Option-----------------------------------------

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
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
            // if no error, clear the input
            e.target.elements.option.value = '';
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
} //---------------------------AddOptions--------------------------------------


ReactDOM.render(<IndesicionApp />, document.getElementById('app'));
