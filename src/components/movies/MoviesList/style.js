import styled from "styled-components";

const Section_container = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

const Container_List = styled.section`
    display: block;
    margin: 10px;
    background-color: #45688b;
    cursor: pointer;
`;

const Title_movie = styled.h3`
    max-width: 210px;
    text-align: center;
    color: #f0f0f0;
    word-wrap: break-word;
    margin: 0;
`;

export {Section_container,Container_List,Title_movie};
