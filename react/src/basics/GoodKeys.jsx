import React, { useState } from 'react';

import allUsers from "../data/Users";

const UserItem = ({ user }) => {
    const [checked, setChecked] = useState(false)
    return <div>
        <input type="checkbox" checked={checked} onChange={e => setChecked(!checked)}/> {user.name}
    </div>;
}

const BadKeyChoice = ({ users }) => {
    return <div>
        {users.map( (user, i) => <UserItem key={i} user={user}/>)}
    </div>
}

const GoodKeyChoice = ({ users }) => {
    return <div>
        {users.map( (user, i) => <UserItem key={`${user.name}`} user={user}/>)}
    </div>
}

export const ArrayKeys = () => {
    const [users, setUsers] = useState([]);

    return <div>
        <button onClick={() => setUsers([allUsers[users.length],...users])}>Add user</button>
        <h2>Bad Key Choice</h2>
        <BadKeyChoice users={users} />
        <h2>Good Key Choice</h2>
        <GoodKeyChoice users={users} />
    </div>
}