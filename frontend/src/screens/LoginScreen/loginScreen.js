import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
// import loginUser from '../../redux/features/Slices/userSlice';
import FormField from '../../Components/FormField';
import { login } from '../../redux/actions/userActions';

const Login = ({ history }) => {
    const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: '',
   password: '',
  })
  const userInfo = useSelector((state) => state?.userLogin?.userInfo)
  // const { userInfo } = userLogin
  const formConfig = {
    email: {
      type: 'input',
      config: { type: 'email', placeholder: 'Email'}
    },
    password: {
      type: 'input',
      config: { type: 'password', placeholder: 'Password'}
    },
  }

  const formElements = [];
  for (let key in formState) {
    formElements.push({ id: key, setup: formConfig[key]})
  }
  const inputChangedHandler = (e, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: e.target.value
        })
      }
    })
  };

  const submitHandler = (e) => { 
    e.preventDefault();
    dispatch(login(formState.email, formState.password))
  }
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      history.push('/admin')
    }
  }, [userInfo, history])
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>administrator login</h2>
        {formElements.map((formElement) => (
          <FormField
            key={formElement.id}
            type={formElement.setup.type}
            config={formElement.setup.config}
            value={formElement.value}
            changed={(e) => inputChangedHandler(e, formElement.id)}
          />
        ))}
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Login;
