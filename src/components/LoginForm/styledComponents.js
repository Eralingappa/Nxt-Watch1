import styled from 'styled-components'

export const AppContainer= styled.div`
display:flex;
justify-content:center;
aligin-item:center;
min-height:100vh;

`
export const FormContainer=styled.div`
display:flex;
justify-content:center;
`
export const LoginLogo= styled.img `
width:100px;
align-self:center;

`
export const InputContainer =styled.div`
width:100x;
margin-top:12px;

`
export const LoginButton =styled.button `
width:100%;
background-color:#4f46e5;
border-rdius:3px;
color:#ffffff;
font-size:12px;

`
export const SubmitError =styled.p`
font-family:'Roboto';
font-size:12px;
color:#ff0b37;
`
export const InputLabel =styled.label `
font-family:'Roboto';
font-size:12px;
color:#475569;

`
export const UserInput = styled.input `

font-family:'Roboto';
font-size:12px;
color:#ff0b37;
border:1px solid #943b8;
`
export const CheckboxContainer =styled.div`
display:flex;
flex-direction:row;
align-items:center;


`
export const Checkbox =styled.input`
width:12px;
height:12px;

`
export const ShowPassword =styled.label`
font-family:'Roboto';
font-size:12px;
color:#1e293b;
`