import styled from "styled-components";

const Headers = styled.header`
    background-color: #ececec;
    width: 100%;
    padding: 40px;
    border: 1px solid green;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 16px;
`;

const Navition = styled.nav`
    display: flex;
    flex-direction: row;
`;

export {Headers,Title,Navition};