import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMemeber: true,
  showAlert: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  //global state and useNvigate

  const toggleMember = () => {
    setValues({ ...values, isMemeber: !values.isMemeber })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  const handleChange = (e) => {
    console.log(e.target)
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMemeber ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
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
