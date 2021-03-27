import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import male from '../../images/Photo/male.png';
import female from '../../images/Photo/female.png';
import facebook from '../../images/Icon/Facebook.png';
import twitter from '../../images/Icon/Twitter.png';
import youtube from '../../images/Icon/YouTube.png';

const LeagueDetail = () => {
    const { idLeague } = useParams();
    console.log(idLeague);
    const [league, setLeague] = useState();
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]));
    }, [idLeague])
    console.log(league);
    const { strLeague, dateFirstEvent, strCountry, strSport, strGender, strBadge, strDescriptionEN } = league || '';
    const thumbnail = strGender == 'Male' ? <img src={male} alt=""/> : <img src={female} alt=""/>
    return (
        <div>
            <div className="top-banner">
                <img src={strBadge} alt="" style={{ height: '120px', display: 'block', margin: '0 auto' }} />
            </div>
            <div className="bg-dark text-white py-3 mb-0">
                <div className="container">
                    <div className="bg-primary p-3 mb-4 row rounded">
                        <div className="col-sm-12 col-md-8">
                            <h4>{strLeague}</h4>
                            <p>Founded: {dateFirstEvent}</p>
                            <p>Country: {strCountry}</p>
                            <p>Sport Type: {strSport}</p>
                            <p>Gender: {strGender}</p>
                        </div>
                        <div className="col-sm-12 col-md-4 thumb">
                            {thumbnail}
                        </div>
                    </div>
                    <div className="description">
                        <p>{strDescriptionEN}</p>
                    </div>
                    <footer className="text-center">
                        <a href="https://facebook.com" target="_blank"><img src={facebook} alt=""/></a>
                        <a href="https://twitter.com" target="_blank"><img src={twitter} alt=""/></a>
                        <a href="https://youtube.com" target="_blank"><img src={youtube} alt=""/></a>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetail;