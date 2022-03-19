import styled from "styled-components";

const StyledContactCloud = styled.img`
    position: absolute;
    pointer-events: none;
    width: ${(props) => props.width};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    opacity: ${(props) => props.opacity};
    z-index: ${(props) => props.index};

    @media ${props => props.theme.media.extra_large} {
        right: ${({extra_large}) => extra_large?.right};
        bottom: ${({extra_large}) => extra_large?.bottom};
    }

    @media ${props => props.theme.media.large} {
        width: ${({large}) => large?.width};
        right: ${({large}) => large?.right};
        bottom: ${({large}) => large?.bottom};
    }

    @media ${props => props.theme.media.medium} {
        top: ${({medium}) => medium?.top};
        right: ${({medium}) => medium?.right};
        bottom: ${({medium}) => medium?.bottom};
    }

    @media ${props => props.theme.media.small} {
        left: ${({small}) => small?.left} !important;
        right: ${({small}) => small?.right} !important;
        top: ${({small}) => small?.top};
        bottom: ${({small}) => small?.bottom} !important;
        width: ${({small}) => small?.width};
        transform: rotate(${({small}) => small?.rotate});
    }

    @media ${props => props.theme.media.extra_small} {
        display: ${({extra_small}) => extra_small?.display};
    }
`;

const ContactImages = ({ image, ...props }) => {
    return <StyledContactCloud src={image} {...props} />;
};

export { ContactImages };
