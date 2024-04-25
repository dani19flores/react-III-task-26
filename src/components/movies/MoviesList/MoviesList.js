import React from 'react';

import {Section_container,Container_List,Title_movie} from "./style";

const MoviesList = ({ shows }) => {
    return (
        <Section_container>
            {shows.map(show => (
                <Container_List>
                    <Title_movie key={show.id}>{show.name}</Title_movie>
                    <img src={show.image.medium}></img>
                </Container_List>
            ))}
        </Section_container>
    );
};

export default MoviesList;
