const elements = ["thing 1", "thing 2"]

function App() {

    const elementArr = elements.map(items => <p>{items}</p>)

return (

    {elementArr}
)

}
