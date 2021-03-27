import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
    const { idLeague } = props.league;
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]));
    }, [idLeague])
    console.log(league);
    const {strBadge, strLeague, strSport} = league;
    return (
        <div className="col-sm-6 col-md-4 border text-center bg-white p-3 mt-2">
            <img src={strBadge} alt="" style={{height: '80px'}}/>
            <h4>{strLeague}</h4>
            <p>Sports Type: {strSport}</p>
            <Link to={`/league/${idLeague}`}>
                <button className="btn btn-primary btn-sm">
                    Explore <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </Link>
        </div>
    );
};

export default League;