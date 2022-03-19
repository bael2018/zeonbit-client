import React from "react";
import styled from "styled-components";

const StyleContactMap = styled.img`
    position: absolute;
    right: -300px;
    width: 1000px;
    height: 1000px;
    z-index: 2;
    border-radius: 50%;
    object-fit: cover;
    top: -100px;

    @media ${props => props.theme.media.extra_large} {
        width: 700px;
        height: 700px;
        top: 100px;
    }

    @media ${props => props.theme.media.medium} {
        display: none;
    }
`;

const ContactMap = () => {
    return <StyleContactMap src="img/map.png" />;
};

export { ContactMap };
