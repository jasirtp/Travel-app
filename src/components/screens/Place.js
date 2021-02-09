import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {Helmet} from "react-helmet";

export default function Place({match}) {

    const [place,setPlace] = useState([]);
    const [subimages,setSubimgs] = useState([]);

    useEffect(() => {
            axios
            .get(`https://traveller.talrop.works/api/v1/places/view/${match.params.id}`)
            .then(function (response) {
                setPlace(response.data.data);
                setSubimgs(response.data.data.gallery)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    return (
        <Section>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{place.name}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <PlaceName>{place.name}</PlaceName>
            <JustDIv>
                <Category>{place.category_name}</Category>
                <Location><LocIcon src={require('../assets/images/place.svg').default} alt={place.location} />{place.location}</Location>
            </JustDIv>
            <Main>
                <Left>
                    <MainImg src={place.image} alt={place.image} />
                </Left>
                <Right>
                    {subimages.map((subimage) =>(
                    <SubImg key={subimage.id} src={subimage.image} alt={subimage.image} />
                    ))}
                </Right>
            </Main>
            <Discrip>
                <Heading>Place Details</Heading>
                <Details>{place.description}</Details>
            </Discrip>
        </Section>
    )
}

const Section = styled.section`
    width: 90%;
    margin: 0 auto;
    padding: 100px 0;
`;

const PlaceName = styled.h1`
        font-size: 42px;
        @media screen and (max-width: 1024px) {
            font-size: 36px;
        }
`;

const JustDIv = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0; 
`;

const Category = styled.span`
    padding: 8px 16px;
    border-radius: 30px;
    border: 1px solid #000;
    margin-right: 10px;
`;

const Location = styled.p`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
`;

const LocIcon = styled.img`
    margin-right: 5px;
`;

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

const Left = styled.div`
    margin-right: 20px;
    @media screen and (max-width: 1024px) {
        margin-right: 0;
    }
`;

const MainImg = styled.img`
    width: 100%;
    height: 100%;
`;

const Right = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

const SubImg = styled.img`
    width: 100%;
`;

const Discrip = styled.div`
    padding:  30px 0;
`;

const Heading = styled.h3`
    font-size: 28px;
    padding-bottom: 20px;
`;

const Details = styled.p`
    line-height: 1.5em;
`;