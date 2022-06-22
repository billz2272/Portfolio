import React from 'react'
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import loginUser from '../../redux/features/Slices/userSlice';

const Login = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //    dispatch(loginUser())
    // }, [dispatch])
   
  return (
    <div>index</div>
  )
}

export default Login
















// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { login } from '../../redux/actions/userActions';
// import FormField from '../../Components/FormField';
// import { loginUser } from '../../redux/features/Slices/userSlice';
// const Login = ({ history }) => {
//     console.log('logindata', data)
//     console.log('loginloading', loading)
//     const dispatch = useDispatch();
//     const [formState, setFormState] = useState({
//         email: '',
//         password: '',
//     })
//     const user = useSelector((state) => state.userlogin)
//     const { userInfo } = userLogin;

//     const formConfig = {
//         email: {
//             type: "input",
//             config: { type: "email", placeHolder: "Your Email" },
//         },
//         password: {
//             type: "input",
//             config: { type: "password", placeHolder: "Your Password" },
//         },
//     }
//     const formElements = []
//     for (let key in formState) {
//         formElements.push({ id: key, setup: formConfig[key] })
//     }
//     const inputChangedHandler = (event, inputIdentifier) => {
//         formElements.forEach((formElement) => {
//             if (inputIdentifier === formElement.id) {
//                 setFormState({
//                     ...formState,
//                     [inputIdentifier]: event.target.value,
//                 })
//             }
//         })
//     }
//     const submitHandler = (e) => {
//         e.preventDefault();
//         dispatch(loginUser(formState.email, formState.password))
//     }
//     useEffect(() => {
//         if (userInfo && userInfo.isAdmin) {
//             history.push('/admin')
//         }
//     }, [userInfo, history]);
// }
       
//   return (
//       <div>
//           <form onSubmit={submitHandler}>
//               <h2>Administrator Login</h2>
//               {formElements.map((formElement) => (
//                   <FormField
//                       key={formElement.id}
//                       type={formElement.setup.type}
//                       config={formElement.setup.config}
//                       value={formElement.value}
//                       changed={(event) => inputChangedHandler(event, formElement.id)}
//                   />
//               ))}
//           <button type='submit'>Submit</button>
//           </form>
//     </div>
//   )
// }

// export default Login