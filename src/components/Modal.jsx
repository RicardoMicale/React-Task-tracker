import React, { useState } from 'react'

function Register(props) {
  return (
    <section>
      <h3 className='font-bold text-lg mb-8'>Create an account</h3>
      <form onSubmit={e => props.submitNewAccount(e)}>
        <label htmlFor="name">Enter your username</label>
        <input type="text" placeholder='John Doe' id='name' value={props.name} onChange={props.nameInput}
          className='w-full border border-gray border-opacity-30 rounded px-4 py-2 mb-8 mt-2 text-base'
        />
        <label htmlFor="emailRegister">Enter your email</label>
        <input type="text" placeholder='email@email.com' id='emailRegister' value={props.email} onChange={props.emailInput}
          className='w-full border border-gray border-opacity-30 rounded px-4 py-2 mb-8 mt-2 text-base'
        />
        <label htmlFor="passwordRegister">Enter your password</label>
        <input type="password" id='passwordRegister' value={props.password} onChange={props.passwordInput}
          className='w-full border border-gray border-opacity-30 rounded px-4 py-2 mb-8 mt-2 text-base'
        />
        <input type="submit" value="Register account"
          className='cursor-pointer bg-blue px-6 py-2 font-bold text-white rounded mb-4 transition-all hover:bg-dark-blue active:bg-dark-blue'
        />
      </form>
      <p className='text-sm'>Already have an account? <span className='text-blue cursor-pointer underline' onClick={props.toggleLogIn}>Log in to your account</span></p>
    </section>

  )
}

function Login(props) {
  return (
    <section>
      <h3 className='font-bold text-lg mb-8'>Log in to your account</h3>
      <form onSubmit={e => props.submitCredentials(e)}>

        <label htmlFor="emailRegister">Enter your email</label>
        <input type="text" placeholder='email@email.com' id='emailLogin' value={props.email} onChange={props.emailInput}
          className='w-full border border-gray border-opacity-30 rounded px-4 py-2 mb-8 mt-2 text-base'
        />
        <label htmlFor="passwordRegister">Enter your password</label>
        <input type="password" id='passwordLogin' value={props.password} onChange={props.passwordInput}
          className='w-full border border-gray border-opacity-30 rounded px-4 py-2 mb-8 mt-2 text-base'
        />
        <input type="submit" value="Log in"
          className='cursor-pointer bg-blue px-6 py-2 font-bold text-white rounded mb-4 transition-all hover:bg-dark-blue active:bg-dark-blue'
        />
      </form>
      <p className='text-sm'>Don't have an account? <span className='text-blue cursor-pointer underline' onClick={props.toggleLogIn}>Create a new account</span></p>
    </section>
  )
}

function Modal() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  //Boolean if usert is creating a new user or using already existing account
  const [newAccount, setNewAccount] = useState(false)

  //Set new value for variables: email, name and password
  function emailInput(event) {
    setEmail(event.target.value)
  }

  function passwordInput(event) {
    setPassword(event.target.value)
  }

  function nameInput(event) {
    setName(event.target.value)
  }

  //Submit new user credentials
  function submitNewAccount(e) {
    e.preventDefault()
    console.log('handled submit new account')
  }

  //Submit credentials for an already existing user
  function submitCredentials(e) {
    e.preventDefault()
    console.log('credentials submited')
  }

  //Switch between log in and register
  function toggleLogIn() {
    setNewAccount(!newAccount)
    console.log(newAccount)
  }

  //Props used in the forms
  let registerProps = {
    name: name,
    email: email,
    password: password,
    emailInput: emailInput,
    passwordInput: passwordInput,
    nameInput: nameInput,
    toggleLogIn: toggleLogIn,
    submitNewAccount: submitNewAccount
  }

  let loginProps = {
    email: email,
    password: password,
    emailInput: emailInput,
    passwordInput: passwordInput,
    toggleLogIn: toggleLogIn,
    submitCredentials: submitCredentials
  }

  return (
    <div className='container bg-gray bg-opacity-60 flex items-center justify-center'>
      <section className='container bg-light-gray px-16 py-16 w-3/4'>
        <button className='flex justify-between items-center bg-white px-12 py-4 rounded-md mb-12 font-bold'>
          <img src="https://s2.svgbox.net/social.svg?ic=google&color=016FB9" width="32" height="32" alt='Google logo' className='mr-4' />
          Log in with Google
        </button>
        <p className='mb-4'>Or you can...</p>
        {newAccount ? <Login {...loginProps} /> : <Register {...registerProps} />}
      </section>
    </div>
  )
}

export default Modal