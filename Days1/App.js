const heading = React.createElement("h1",
    {id:"helo"},
    "Hello from React.",
    React.createElement('div',{id:"desc"},"Helo i am div of Heading.")

);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);