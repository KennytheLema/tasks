import React from "react";
import "./App.css";
import logo from "./images/charmeleon.jpg"

console.log(logo)

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>

            <img src={logo} alt= "Dark charmeleon pokemon card"/>;

            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. Kenny Lema
            </p>
        </div>
    );
}

export default App;
