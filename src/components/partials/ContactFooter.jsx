import styled from "styled-components";
import { contactFooterIcons, contactFooterImages } from "../../constants/init";
import { ContactImages } from "../elements/ContactImages";
import { FormIcon } from "../elements/FormIcon";

const StyledContactFooter = styled.div`
    height: 200px;
    background: #fafafa;
    border-top: 1px solid #d8d8d8;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    div {
        margin-left: 300px;
        margin-top: 70px;
    }

    @media ${props => props.theme.media.medium} {
        height: 150px;
    }

    @media ${props => props.theme.media.small} {
        div {
            margin-left: 150px;
        }
    }

    @media ${props => props.theme.media.extra_small} {
        div {
            margin-left: 50px;
        }
    }
`;

const ContactFooter = () => {
    return (
        <StyledContactFooter>
            <div>   
                {contactFooterIcons.map((item) => (
                    <FormIcon key={item.id} {...item} />
                ))}
            </div>
            {contactFooterImages.map((cloud) => (
                <ContactImages key={cloud.id} {...cloud} />
            ))}
        </StyledContactFooter>
    );
};

export { ContactFooter };
