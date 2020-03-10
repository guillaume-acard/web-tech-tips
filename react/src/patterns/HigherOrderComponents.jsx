import React from 'react'

const withHeader = (Component) => {
    return props => <>
        <header>
            WELCOME to MY AWESOME WEBSITE!!!
        </header>
        <Component {...props} likeMe={() => alert("like!!!")} />
    </>
}

const UserProfile = ({ likeMe }) => {
    return <div>
        <h2>Scott Tiger {likeMe && <button onClick={likeMe}>Like!</button>}</h2>
        <sub>Logged</sub>
    </div>
}

const UserProfileWithHeader = withHeader(UserProfile);

export const HigherOrderComponents = () => {
    return <div>
        <h1>Standard</h1>
        <UserProfile />
        <h1>With Header</h1>
        <UserProfileWithHeader />
    </div>;
}

// const hasActivatedFeature = (Component, name) => {
//     const loggedUser = useLoggedUser();
//     if(loggedUser.hasFeature(name)){
//         return <Component />
//     }
//     return null;
// }
