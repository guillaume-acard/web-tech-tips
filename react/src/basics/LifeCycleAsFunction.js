try{
    componentDidMount();
    void function forceUpdate(props){
        componentWillReceiveProps(props);
        if(shouldComponentUpdate(props)){
            componentWillUpdate();
            render();
            componentDidUpdate();
        }
    }();
    componentWillUnmount();
}catch(error){
    getDerivedStateFromError();
    componentDidCatch(error)
}