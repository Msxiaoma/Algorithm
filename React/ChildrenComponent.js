import  React from 'react';

export default class ChildrenComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('children——constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('children——getDerivedStateFromProps', props, state)
        return null;
    }
    shouldComponentUpdate() {
        console.log('children——shouldComponentUpdate')
         return true
    }
    getSnapshotBeforeUpdate(){
        console.log('children——getSnapshotBeforeUpdate')
    }
    componentDidUpdate() {
        console.log('children——componentDidUpdate')
    }
    componentDidMount() {
        console.log('children——componentDidMount')
    }
    componentWillUnmount() {
         console.log('children——componentWillUnmount')
    }
    render() {
        console.log('children——render')
        const { name } = this.props;
        return <div>ChildrenComponent - { name }</div>;
    }
}