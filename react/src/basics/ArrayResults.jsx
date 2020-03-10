import React from 'react'

const Component1 = () => <React.Fragment>
    <div /* key="0" */>One</div>
    <div /* key="1" */>Two</div>
</React.Fragment>

const Component2 = () => <>
    <div>One</div>
    <div>Two</div>
</>

const Component3 = () => [
    <div key="1">One</div>,
    <div key="2">Two</div>
]

export const ArrayResults = () => {
    return <div>
        <Component1 />
        <Component2 />
        <Component3 />
    </div>
}