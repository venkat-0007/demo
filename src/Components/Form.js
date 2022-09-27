import React from 'react'
import bgImg from '../assets/terraform.jpg'
import {useForm} from 'react-hook-form'
import { useState } from 'react'

export default function Form() {
  const {register, handleSubmit, error} = useForm()
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  }
  return (
    <div className='register'>
      <div className='col-1'>
        <h2>Sign Up</h2>
        <span>Make infra creation easy</span>

        <form id="form" className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("password")} placeholder='username'/>
          <input type="password" {...register("password")} placeholder='password'/>
          <input type="password" {...register("confirmpassword")} placeholder='confirmpassword'/>

          <button className='btn'>Sign in</button>
          <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        </form>
      </div>
      <div className='col-2'>
        <img src={bgImg} alt=""/>
      </div>
    </div>
  )
}
