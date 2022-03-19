import { FormInput } from "../elements/FormInput"
import { useInput } from '../../hooks/useInput'
import styled from 'styled-components'
import { FormTextArea } from "../elements/FormTextArea"
import FormButton from "../elements/FormButton"
import CustomModal from "./CustomModal"
import { useDispatch, useSelector } from "react-redux"
import { modalActions } from "../../store/action-creators/modal-action"
import { modalStatuses } from "../../constants"
import { fetchApi } from "../../api"

const StyledFrom = styled.form`
    width: 560px;
    margin-left: 150px;
    position: relative;
    z-index: 3;

    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 130%;
        color: #3E3E3E;
        margin-bottom: 35px;
    }

    @media ${props => props.theme.media.large} {
        margin-left: 100px;
    }

    @media ${props => props.theme.media.medium} {
        width: 80%;
        margin: 0 auto;
    }

    @media ${props => props.theme.media.extra_small} {
        h3{
            font-size: 35px;
            margin-bottom: 25px;
        }
    }
`

const ContactForm = () => {
    const { status , text , isActiveModal } = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const message = useInput('')
    const email = useInput('')
    const name = useInput('')

    const contactFormHandler = async e => {
        e.preventDefault()

        if(name.value !== '' && message.value !== '' && email.value !== ''){
            try {
                const body = {
                    name: name.value,
                    message: message.value,
                    email: email.value
                }
                await fetchApi.portRequest('user/register' , body)

                message.clearValue()
                name.clearValue()
                email.clearValue()
    
                dispatch(modalActions.setOpenModal({
                    status: modalStatuses.RESOLVED,
                    text: 'Successfully saved!'
                }))
            } catch (error) {
                dispatch(modalActions.setOpenModal({
                    status: modalStatuses.REJECTED,
                    text: 'Server Error'
                }))
            }
        }else{
            dispatch(modalActions.setOpenModal({
                status: modalStatuses.REJECTED,
                text: 'All fields are required!'
            }))
        }
    }

    return (
        <StyledFrom 
            onSubmit={contactFormHandler}
        >
            <h3>Reach out to us!</h3>
            <FormInput  
                type='text'
                holder='Your name*'  
                {...name.bind()} 
            />
            <FormInput 
                type='email'
                holder='Your email*' 
                {...email.bind()} 
            />
            <FormTextArea 
                holder='Your message*' 
                {...message.bind()}
            />
            <FormButton 
                active={isActiveModal} 
                text='Send message'
            />
            <CustomModal
                text={text}
                status={status}
                active={isActiveModal}
            />
        </StyledFrom>
    )
}

export { ContactForm }