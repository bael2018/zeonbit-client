import styled from "styled-components";

const StyledInput = styled.input`
    width: 557px;
    height: 93px;
    background: white;
    border: ${({ value }) =>
        value === "" ? "1px solid #DCDCDC" : "2px solid yellow"};
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
    margin-bottom: 10px;
    padding: 0 25px;
    font-size: 18px;
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

const FormInput = ({ type, holder, ...props }) => {
    return <StyledInput type={type} placeholder={holder} {...props} />;
};

export { FormInput };
