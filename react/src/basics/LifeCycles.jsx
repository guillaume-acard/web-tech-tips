import React, { Component, useState, useEffect, useRef, PureComponent } from 'react';

export class LifeCycleExampleComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { status: "loading..." };
        this.updateCount = 0;

    }

    componentDidMount() {
        setTimeout(() => this.setState({ status: "Loaded!" }), 2000);
    }

    componentDidUpdate() {
        this.updateCount++;
    }

    componentWillUnmount() {
        alert("NOOOOOOOOOOOOOOOO! Component");
    }

    componentWillReceiveProps(nextProps) {
        console.log(`New props: ${JSON.stringify(nextProps)}`);
    }

    // See what happens if removed => Functional component
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.ticks !== this.props.ticks) {
    //         return true;
    //     }
    //     if (nextState.status !== this.state.status) {
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        const { status, unknownValue } = this.state;
        return <section>
            <p>{status} - Ticks={this.props.ticks}</p>
            <p>Update count: {this.updateCount}</p>
            {this.updateCount > 4 && unknownValue.length}
        </section>
    }
}

export class RootLifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { hideComponent: false, ticks: 0, error: null };
    }

    static getDerivedStateFromError(error) {
        return { error: error.message };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hideComponent, ticks, error } = this.state;
        if (error) return <div>Something went wrong! {error}</div>;
        return <div>
            {!hideComponent && <LifeCycleExampleComponent ticks={ticks} />}
            {!hideComponent && <LifeCycleExampleFunctional ticks={ticks} />}
            <button onClick={() => this.setState(state => ({ ticks: state.ticks + 1 }))}>Update Tick</button>
            <button onClick={() => this.forceUpdate()}>Update Unrelated</button>
            <button onClick={() => this.setState({ hideComponent: true })}>Kill me!</button>
        </div>
    }
}

export const LifeCycleExampleFunctional =
    // shouldComponentUpdate
    React.memo(({ ticks }) => {
        const [status, setStatus] = useState("loading...");

        const didUpdateRef = useRef({ loaded: false, count : 0});
        useEffect(function componentDidUpdate(){
            if(didUpdateRef.current.loaded){
                didUpdateRef.current.count++;
            }else{
                didUpdateRef.current.loaded = true;
            }
        });

        useEffect(function componentDidMount() {
            setTimeout(() => setStatus("Loaded!"), 2000);

            return function componentWillUnmount() {
                alert("NOOOOOOOOO! Functional");
            };
        }, []);

        try{
            return <section>
                <p>{status} - Ticks={ticks}</p>
                <p>Update count: {didUpdateRef.current.count}</p>
                {didUpdateRef.current.count > 4 && didUpdateRef.call()}
            </section>
        }catch(error){
            // getDerivedStateFromError
            return <h2>Something went wrong! {error.message}</h2>
        }
    });