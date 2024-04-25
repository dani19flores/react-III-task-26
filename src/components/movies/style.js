import styled, { keyframes } from "styled-components";

const SearchContainer = styled.section`
    margin-bottom: 20px;
    box-sizing: border-box;
`;

const SearchInput = styled.input`
    padding: 10px;
    width: 90%;
    border: 1px solid ${({isFocused}) => (isFocused ? '#007bff' : '#ccc')};
    border-radius: 5px;
    font-size: 16px;
    outline: none;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #007bff;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const AnimatedBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #bbb;
    animation: ${fadeIn} 3s ease-in-out;
`;

export { SearchContainer, SearchInput, AnimatedBox };
