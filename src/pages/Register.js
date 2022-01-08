import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMemeber: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  //global state and useNvigate
  const { isLoading, showAlert, displayAlert } = useAppContext(initialState)

  const toggleMember = () => {
    setValues({ ...values, isMemeber: !values.isMemeber })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMemeber } = values
    if (!email || !password || (!isMemeber && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMemeber ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMemeber && (
          <FormRow
            type='text'
            name='name'
            values={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          values={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          values={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          {' '}
          submit
        </button>
        <p>
          {values.isMemeber ? 'Not a memeber yet?' : 'Already a memeber?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMemeber ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
