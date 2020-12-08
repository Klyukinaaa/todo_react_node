import React, {useContext} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AuthContext from "../context/authContext";

export function AuthRouter({match}) {
  const authContext = useContext(AuthContext);

  if (authContext.isAuth) {
    return <Redirect to='/items'/>
  }
  return (
      <Switch>
        <Route exact path={`${match.path}/login`} component={Login}/>
        <Route exact path={`${match.path}/register`} component={Register}/>
      </Switch>
  )
}

// function MockComp() {
//   const authContext = useContext(AuthContext)
//   let history = useHistory();
//   const buttonStyle = {
//     width: 300,
//     height: 300
//   }
//   return (
//       <>
//         <p>{`Register rendered, context is ${authContext.isAuth}`}</p>
//         <button
//             style={buttonStyle}
//             onClick={() => history.goBack()}/>
//       </>
//   )
// }
//
// function Login() {
//   console.log('rendered')
//   const authContext = useContext(AuthContext)
//   let history = useHistory();
//   const buttonStyle = {
//     width: 300,
//     height: 300
//   }
//
//   console.log(`login rendered, context is ${authContext.isAuth}`)
//   return (
//       <>
//         <button
//             style={buttonStyle}
//             onClick={() => authContext.setIsAuth(!authContext.isAuth)}>
//           {`Context value is ${authContext.isAuth}`}
//         </button>
//         <button
//             style={buttonStyle}
//             onClick={() => history.push('/auth/register')}/>
//       </>
//   )
// }

