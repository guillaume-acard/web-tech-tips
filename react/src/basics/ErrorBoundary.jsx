import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error: error.message };
    }

    render() {
        if (this.state.error) {
            const { errorComponent } = this.props;
            if(errorComponent){
                const ErrorComponent = errorComponent;
                return <ErrorComponent error={this.state.error} />
            }
            return <h1>Something went wrong: {this.state.error}</h1>;
        }
        return this.props.children;
    }
}

const SubComponent1 = () => <div>This is one is working.</div>;
const SubComponent2 = () => <div>This is one is not working. {this.props.unknownFunction()}</div>;

export const ErrorUsageExample = () => {
    return <>
        <ErrorBoundary>
            <SubComponent1 />
        </ErrorBoundary>
        <ErrorBoundary>
            <SubComponent2 />
        </ErrorBoundary>
        <ErrorBoundary errorComponent={ ({ error }) => <h1>PANIIIIIIC! {error}</h1>}>
            <SubComponent2 />
        </ErrorBoundary>
    </>
}