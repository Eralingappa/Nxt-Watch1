import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookies'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt-token')

  if (token === undefined) {
    return <Redirect to='/login' />
  }
  return <Route {...props} />
}
export default ProtectedRoute
