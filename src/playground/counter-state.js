class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // state is an OBJECT:
        this.state = {
            count: 0
            //count: props.count
        }
    }
    
    //----React Component Lifecycle hooks - ONLY in Class based Components----
    componentDidMount(){
        console.log("--componentDidMount() --> fetching data!");
        
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        
        if (!isNaN(count)) {
            this.setState(() => ({ count: count }));
        }
    }
    // save updated value 
    componentDidUpdate(prevProps, prevState){
        console.log("--componentDidUpdate() --> saving data!");
        // check to see if value actually changed
        if (prevState.count !== this.state.count) {
            // save our count number BUT it will be a string
            localStorage.setItem('count', this.state.count);
        }
    }
    //----React Component Lifecycle hooks - ONLY in Class based Components----
    

    handleAddOne () {
        // setState is a method that manipulates the state object.
        // The first arg is a snapshot of the current state of the state obj
        this.setState((prevState) => {
            console.log("handleAddOne() - prevState:", prevState);
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne () {
        this.setState((prevState) => {
            console.log("handleMinusOne() - prevState:", prevState);
            return {
                count: prevState.count -1
            };
        });
    }
    handleReset () {
        //this.setState(() => { return { count: 0 } });
        // don't need the return keyword:
        this.setState(() => ( { count: 0 } ));
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// set up default props vaules for Counter: (NOT USED BECUASE OF LOCAL STORAGE)
// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));
// using a predefined prop passed in to count
//ReactDOM.render(<Counter count={21}/>, document.getElementById('app'));
