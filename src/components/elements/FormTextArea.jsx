import styled from "styled-components";

const StyledArea = styled.textarea`
    width: 557px;
    height: 189px;
    background: white;
    border: ${({ value }) =>
        value === "" ? "1px solid #DCDCDC" : "2px solid yellow"};
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
    padding: 0 25px;
    padding-top: 25px;
    font-size: 18px;
    resize: none;
    color: #2d2d2d;

    &:focus {
        border: 2px solid yellow;
    }

    &::placeholder {
        font-size: 18px;
        color: #2d2d2d;
    }

    @media ${props => props.theme.media.medium} {
        width: 100%;
    }
`;

const FormTextArea = (props) => {
    return <StyledArea placeholder={props.holder} {...props} />;
};

export { FormTextArea };
