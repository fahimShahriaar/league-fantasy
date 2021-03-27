import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Leagues.css';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    console.log(leagues);
    return (
        <div className="bg-dark pt-3">
            <div className="container">
                <div className="row">
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Leagues;