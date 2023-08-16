import MusicProduction from "./MusicProduction";
import VideoAndCinematics from "./VideoAndCinematics";
import Groups from "./Groups";
import Sounds from "./Sounds";
import { Col, Container, Row } from "react-bootstrap";
import { ContextProvider } from '../Utils/GenreContext';
import React, { useState } from 'react';


const Base = () => {

    const [isGenreMenuVisible, setIsGenreMenuVisible] = useState(false);
    // const [selectedGenre, setSelectedGenre] = useState(null);
    // const [selectedGroup, setSelectedGroup] = useState(null);
  
    const handleToggleGenreMenu = () => {
      setIsGenreMenuVisible(!isGenreMenuVisible);
    };
  
    // const handleGenreSelect = (genre) => {
    //   setSelectedGenre(genre);
    //   setSelectedGroup(null); // Reset selected group when changing genres
    // };
  
    // const handleGroupSelect = (group) => {
    //   setSelectedGroup(group);
    // };

    return(
        <ContextProvider>
            <Container className="Base">
            <Row>
            <Col className="Base__col">
                <MusicProduction 
            handleToggleGenreMenu={handleToggleGenreMenu}
            isGenreMenuVisible={isGenreMenuVisible}
            />
            </Col>
            <Col className="Base__col"><VideoAndCinematics/></Col>
            <Col className="Base__col">
                <Groups
            />
            </Col>
            <Col className="Base__col"><Sounds isGenreMenuVisible={isGenreMenuVisible} /></Col>
            </Row>
        </Container>
        </ContextProvider>
    );
}

export default Base;