import  React from 'react';
import ChildrenComponent from './ChildrenComponent'

export default class ParentComponet extends React.Component {
    constructor(props) {
        super(props);
        console.log('parent——constructor');
       this.state = {
            childName: 'aaaa'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('parent——getDerivedStateFromProps', props, state);
        return null
    }
    componentDidMount() {
        console.log('parent——componentDidMount');
    }
    onClick = () => {
        console.log('onClick');
        this.setState({
            childName: 'hahahahhah'
        })
    }
    render() {
        console.log('parent——render', this.state.childName);
        return (
            <div onClick={this.onClick}>
                parent——render
                <ChildrenComponent name={this.state.childName}/>
            </div>
        )
    }
    getSnapshotBeforeUpdate() {
        console.log('parent——getSnapshotBeforeUpdate');
    }
    shouldComponentUpdate() {
        console.log('parent——shouldComponentUpdate');
        return true
    }
    componentDidUpdate() {
        console.log('parent——componentDidUpdate');
    }
    componentWillUnmount() {
         console.log('parent——componentWillUnmount');
    }
}