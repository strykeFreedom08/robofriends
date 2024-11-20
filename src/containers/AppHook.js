import React, { useState, useEffect } from "react";
import CardList from '../components/CardList';
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css'

function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    },[]);

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
        <h1>Loading...</h1>
        :
        (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <Searchbox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots = {filteredRobot} />
                </ErrorBoundry>
            </Scroll>
        </div>
        );

}

export default App;