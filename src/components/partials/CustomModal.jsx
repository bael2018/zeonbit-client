import { modalActions } from "../../store/action-creators/modal-action";
import { modalStatuses } from "../../constants";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StyledCustomModal = styled.div`
    position: absolute;
    top: 150px;
    width: 200px;
    right: -250px;
    text-align: center;
    z-index: 10;
    border-radius: 5px;
    padding: 15px;
    background: ${({ status }) =>
        status === modalStatuses.REJECTED ? "#F472B7" : "#FAD34F"};
    transition: 0.3s;
    color: white;
    font-weight: 500;
    ${({ active }) =>
        active
            ? `
        opacity: 1;
        transform: translateY(-30px) scale(1.1);
    `
            : `
        opacity: 0;
        transform: tranlateY(0px) scale(.8);
    `}

    @media ${props => props.theme.media.large} {
        right: 0px;
        top: 30px;
    }

    @media ${props => props.theme.media.medium} {
        right: 200px;
        top: 10px;
    }

    @media ${props => props.theme.media.small} {
        right: 10px;
        top: 150px;
    }
`;

const CustomModal = ({ text, ...props }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(modalActions.setCloseModal());
        }, 3000);
    }, [props.active]);

    return <StyledCustomModal {...props}>{text}</StyledCustomModal>;
};

export default memo(CustomModal);
