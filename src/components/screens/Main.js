import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

export default function Main() {

    const [places,setPlaces] = useState([]);

    useEffect(() => {
            axios
            .get('https://traveller.talrop.works/api/v1/places/')
            .then(function (response) {
                setPlaces(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <MainSection>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Moke. | Traveller Guide</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Heading>Welcome</Heading>
            <Short>Explore The World Around You</Short>
            <PlacesList>
                {places.map((place) => (
                    <ListItems key={place.id}>
                        <Link to={`/Traveller-Guide/place/${place.id}`} style={{textDecoration: 'none'}}>
                            <PlaceImg src={place.image} alt={place.name} />
                            <PlaceName>{place.name}</PlaceName>
                            <Location><LocIcon src={require('../assets/images/place.svg').default} alt={place.location} />{place.location}</Location>
                        </Link>
                    </ListItems>
                ))}
            </PlacesList>
        </MainSection>
    )
}

const MainSection = styled.section`
    padding: 100px 0; 
`;

const Heading = styled.h2`
    font-size: 42px;
    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
`;

const Short = styled.h4`
    font-size: 24px;
    padding: 20px 0;
    font-weight: 400;
    color: #C9C8C9;
`;

const PlacesList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 568px) {
        grid-template-columns: 1fr;
    }
`;

const ListItems = styled.li`
    cursor: pointer;
    border-radius: 5px;
    overflow:hidden;
    &:hover {
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
    }
`;

const PlaceImg = styled.img`
    width: 100%;
`;

const PlaceName = styled.h4`
    font-size: 16px;
    padding: 10px;
`;

const Location = styled.p`
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 10px 10px;
`;

const LocIcon = styled.img`
    margin-right: 5px;
    height: 100%;
`;