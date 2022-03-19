import { ContactFooter } from "../components/partials/ContactFooter";
import { ContactForm } from "../components/partials/ContactForm";
import { ContactMap } from "../components/partials/ContactMap";
import styled from "styled-components";
import { contactImages } from "../constants/init";
import { ContactImages } from "../components/elements/ContactImages";

const StyledContactUs = styled.div`
    position: relative;
    overflow: hidden;
    padding: 200px 0;

    &::before{
        content: '';
        position: absolute;
        top: 20px;
        right: 800px;
        background: #FAD34F;
        opacity: 0.1;
        border-radius: 50%;
        width: 87px;
        height: 87px;
    }

    @media ${props => props.theme.media.extra_large} {
        padding: 150px 0;
    }

    @media ${props => props.theme.media.large} {
        &::before{
            right: 500px;
        }
    }
`;

const ContactUs = () => {
    return (
        <>
            <StyledContactUs>
                <ContactForm />
                <ContactMap />
                {contactImages.map((cloud) => (
                    <ContactImages key={cloud.id} {...cloud} />
                ))}
            </StyledContactUs>
            <ContactFooter />
        </>
    );
};

export { ContactUs };
