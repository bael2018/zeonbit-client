import styled from "styled-components";

const StyledFormIcon = styled.a`
    text-direction: none;
    color: grey;
    font-size: 23px;
    margin-right: 20px;
    
    svg{
        transition: .3s;

        &:hover{
            transform: scale(1.2);
            color: #fad34f;
        }
    }
`;

const FormIcon = ({ icon, href, target }) => {
    return (
        <StyledFormIcon target={target} href={href}>
            {icon}
        </StyledFormIcon>
    );
};

export { FormIcon };
