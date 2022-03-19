import styled from "styled-components";
import { memo } from "react";

const StyledFormButton = styled.button`
    width: 218px;
    height: 73px;
    background: #fad34f;
    border-radius: 500px;
    border: none;
    outline: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    margin-top: 20px;
    color: #ffffff;
    opacity: ${({ active }) => active ? .7 : 1};
    pointer-events: ${({ active }) => active ? 'none' : 'all'};

    @media ${props => props.theme.media.extra_small} {
        width: 100%;
    }
`;

const FormButton = ({ text, ...props }) => {
    return (
        <StyledFormButton {...props}>{text}</StyledFormButton>
    );
};

export default memo(FormButton);
