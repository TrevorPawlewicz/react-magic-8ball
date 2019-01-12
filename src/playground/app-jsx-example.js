// JSX - Javascript XML - needs to be transpiled (using Babel)
// you can have only ONE ROOT element!!!
// wrap everything in a root div
const template = (
    <div>
        <h1>Indesicion React App</h1>
        <p>...some info...</p>
    </div>
);
//----------------------------------------------------------------------------


// dynamic variables:
const userName = 'Bob';
const userAge = 66;
const userLocation = 'Philly';

const template2 = (
    <div>
        <h1>{userName.toUpperCase()}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>
    </div>
);
//----------------------------------------------------------------------------

// dynamic object:
const user = {
    name: 'Joe',
    age: '22',
    location: 'New York'
};

function getLocation(local) {
    if (local) {
        return <p>Location: {local}</p>;
    } else {
        console.log("Location is", local);
    }
};

const template3 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        
        {getLocation(user.location)}
    </div>
);
//----------------------------------------------------------------------------

// challenge:
const app = {
    title: 'React App GO!',
    subtitle: 'JSX rules!',
    options: ['0ne', 'Two']
};
const template4 = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? app.options[0] : 'No Options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
//----------------------------------------------------------------------------


// grab HTML DOM elemnt by ID:
const appRoot = document.getElementById('app');

// render this element with this ID
ReactDOM.render(template4, appRoot);