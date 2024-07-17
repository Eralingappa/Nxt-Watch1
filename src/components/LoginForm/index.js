import {Component} from 'react'
import {Cookies} from 'js-cookies'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  LoginButton,
  SubmitError,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
} from 'styledComponents'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    ShowPassword: false,
    ShowSubmitError: false,
    errorMsg: '',
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  onShowPassword = () => {
    this.setState(prevState => ({ShowPassword: !prevState.ShowPassword}))
  }
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt-token',jwtToken{
      express:30,
      path:'/'
    })
    history.repale('/')
  }
  onSubmitFailure =errorMsg=>{
    this.setState({ShowSubmitError:true,errorMsg})
  }
  submitForm = async event =>{
    event.preventDefault()

    const {username,password}=this.state
    const userDetails ={username, password}
    const url ='https://api.ccbp.in/login'

    const options={
      method:'POST',
      boby:JSON.stringify(userDetails)
    }
    const response =await fetch(url, options)
    const data =await response.json()

    if(response.ok ===true){
    this.onSubmitSuccess(data.jwt_token)
    
  }else{
    this.onSubmitFailure(data.error_msg)
  }
}

renderUsernameFailed =()=>{
const {username}= this.state
return(
  <>
  <InputLabel htmlFor="username">USERNAME</InputLabel>
  <UserInput type="text" id="username"value={username} name="username" onChange={this.onChangeHandler}
  placeholders="UserName"/>
  </>
)
}
renderPasswordFailed =() =>{
  const {password,showPassword}=this.state
  const inputType =showPassword ? 'text' :'password'

    return(
      <>
      <InputLabel htmlFor="password">PASSWORD</InputLabel>
      <UserInput type={inputType} id="password" value={password} name="password" onChange={this.onChangeHandler}
      placeholders="Password" />

      <CheckboxContainer>
      <Checkbox type="checkbox" id="checkbox" onChange={this.onShowPassword}/>
      <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
      
      </CheckboxContainer>
      </>
    )

}
render(){
  const {showSubmitError, errorMsg}=this.state
  const jwtToken =Cookies.get(`jwt_token`)

  if(jwtToken !== undefined){
    return <Redirect to="/"/>
  }

  return(
    <AppContainer>
    <FormContainer onsubmit ={this.submitForm}>
    <LoginLogo 
    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="website logo"/>
      <InputContainer>{this.renderUsernameFailed()}</InputContainer>
      <InputContainer>{this.renderPasswordFailed()}</InputContainer>
      <LoginButton type="submit">Login</LoginButton>
      {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
    </FormContainer>

    </AppContainer>
  )
}

}
export default LoginForm