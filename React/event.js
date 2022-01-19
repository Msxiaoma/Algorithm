
// import react from "react";
// import ReactDOM from 'react-dom';

function Sibling() {
  useEffect(() => {
    console.log("Sibling effect");
  }, []);

  return <h1>Sibling</h1>;
}

class App extends React.Component {
    onClick = (e) => {
        console.log('点击 1', e)
        e.stopPropagation()
    }
    componentDidMount() {
        console.log('componentDidMount')
        document.addEventListener('click', e => {
            console.log('document')
        })
    }
    render() {
        // return (
        //     <div onClick={this.onClick}>点击</div>
        // )
        return (
            <React.Suspense fallback={<h3>loading...</h3>}>
                <React.lazy >dddd</React.lazy>
                <Sibling />
            </React.Suspense>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));