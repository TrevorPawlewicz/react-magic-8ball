const app = {
    title: 'React App GO!',
    subtitle: 'JSX rules!',
    options: []
};

// grab HTML DOM elemnt by ID:
const appRoot = document.getElementById('app');


const onFormSubmit = (e) => {
    e.preventDefault(); // stop full page refresh
    
    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option); // push onto our array
        e.target.elements.option.value = ''; // then clear the value
        renderThis(); // call func to render it to the page
    }
}; //--------------------------------------------------------------------------



const onMakeDecision = () => {
    // get a random number with our number of option selections:
    const randomNum = Math.floor(Math.random() * app.options.length);
    const pickedOption = app.options[randomNum];
    console.log("pickedOption:", pickedOption);
};


const removeAll = () => {
    app.options = []; // clear the entire array
    renderThis(); // call func to render it to the page
}; //--------------------------------------------------------------------------




const renderThis = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? app.options[0] : 'No Options'}</p>
            
            <button onClick={onMakeDecision} disabled={app.options.length===0}>Random Pick</button>
            
            <button onClick={removeAll}>Remove All</button>
            
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    // render this element with this ID
    ReactDOM.render(template, appRoot);
}; //--------------------------------------------------------------------------

renderThis();

