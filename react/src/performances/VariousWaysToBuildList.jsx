import React, { useEffect, useState } from 'react'
import users from "../data/Users";
import { Route } from 'react-router-dom';

const filterUser = (user, search) => {
    if(!search) return true;
    return user.name.toLowerCase().includes(search) || user.company.toLowerCase().includes(search);
}

const PureDOM = elementId => {
    const element = document.getElementById(elementId);
    const allUsers = document.createElement("div");
    
    const createUserListElement = () => {
        return users.map( (user, i) => {
            const div = document.createElement("div");
            div.textContent = `${user.name} @ ${user.company}`;
            div.setAttribute("index", i);
            div.className = "user";
            return div;
        });
    }
    
    const usersList = createUserListElement();
    usersList.forEach( item => allUsers.appendChild(item));
    
    const searchInput = document.createElement("input");
    searchInput.onkeydown = e => { 
        const search = e.target.value;
        allUsers.childNodes.forEach(node => {
            const index = node.getAttribute("index");
            const user = users[index];
            if(!filterUser(user, search)){
                node.style.display = "none";
            }else{
                node.style.display = "block";
            }
        })
    }

    element.appendChild(searchInput);
    element.appendChild(allUsers);
}

const ReactStandard = () => {
    const [search, setSearch] = useState("");
    return <div>
        <input value={search} onChange={e => setSearch(e.target.value)}></input>
        <div>
            {users.filter(user => filterUser(user, search)).map( user => <div 
                key={user._id}
                className="user"
            >
                {user.name} @ {user.company}
            </div>)}
        </div>
    </div>
}

const DOMBasics = () => {
    useEffect(() => {
        PureDOM("dom-basics");
    }, []);
    return <div id="dom-basics"/>;
}

const VariousWaysToBuildList = () => {
    return <div>
        <nav>
            <a href="/list-perf/dom">DOM</a>
            <a href="/list-perf/jsx">React</a>
        </nav>
        <Route exact path={"/list-perf/dom"} component={DOMBasics} />
        <Route exact path={"/list-perf/jsx"} component={ReactStandard} />
    </div>
}

export default VariousWaysToBuildList;