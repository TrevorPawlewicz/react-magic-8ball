class VisibilityToggle extends React.Component {
    // when overriding the constructor with our info, we MUST pass props into super()
    constructor(props){
        super(props);
        // must preserve the binding of 'this'
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        
        this.state = {
            visibility: false
        }
    }
    
    handleToggleVisibility () {
        // setState is a method that manipulates the state object.
        // The first arg is a snapshot of the current state of the state obj
        this.setState((prevState) => {
            return { visibility: !prevState.visibility }
        });
    }
    
    // React.Component MUST have render()
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
    
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
    
                {this.state.visibility && (<div><p>You can see this now...</p></div>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
//----------------------------------------------------------------------------


// old static way:

// let visibility = false;
// 
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// } //-----------------toggleVisibility-----------------------------------------
// 
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
// 
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
// 
//             {visibility && (<div><p>You can see this now...</p></div>)}
//         </div>
//     );
// 
//     ReactDOM.render(jsx, document.getElementById('app'));
// } //-------------------render-------------------------------------------------
// 
// render();
//-----------------------------------------------------------------------------
