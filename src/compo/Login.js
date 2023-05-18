import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

import { login } from '../reduxwork/UserSlice'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserLogin } from '../utils'
import requestInstance from '../utils/axios_instance'


const Login = () => {
  const [userEmail, setuserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const navi = useNavigate()
  const dispatcher = useDispatch()

  function loginUser() {
    const userData = {
      email: userEmail,
      pass: userPassword
    }

    requestInstance().post(UserLogin, userData)
      .then((result) => {
        console.log(result.data)
        let userData = result.data.user
        userData.idToken = result.data.token

        dispatcher(login(userData))
        navi("/")
        alert("Login Success")
      }).catch((err) => {
        console.log(err)
      });
  }

  return (
    <div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,233 0,233 C 89.51025641025643,216.80769230769232 179.02051282051286,200.6153846153846 248,187 C 316.97948717948714,173.3846153846154 365.42820512820504,162.34615384615384 444,161 C 522.571794871795,159.65384615384616 631.2666666666668,168.00000000000003 715,194 C 798.7333333333332,219.99999999999997 857.5051282051284,263.65384615384613 946,284 C 1034.4948717948716,304.34615384615387 1152.7128205128206,301.3846153846154 1240,289 C 1327.2871794871794,276.6153846153846 1383.6435897435897,254.8076923076923 1440,233 C 1440,233 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,466 0,466 C 96.84615384615387,466.28205128205127 193.69230769230774,466.56410256410254 273,491 C 352.30769230769226,515.4358974358975 414.076923076923,564.025641025641 478,541 C 541.923076923077,517.974358974359 608.0000000000001,423.33333333333337 686,394 C 763.9999999999999,364.66666666666663 853.9230769230768,400.6410256410257 931,446 C 1008.0769230769232,491.3589743589743 1072.3076923076924,546.1025641025641 1155,551 C 1237.6923076923076,555.8974358974359 1338.8461538461538,510.94871794871796 1440,466 C 1440,466 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>

      <Container className='regcontainer w-50 '>
        <Form>
          <Form.Group className='mt-3'>
            <Form.Control type="Email" onChange={(e) => setuserEmail(e.target.value)} placeholder='Enter Email' />
          </Form.Group>

          <Form.Group className='mt-3'>
            <Form.Control type="Password" onChange={(e) => setUserPassword(e.target.value)} placeholder='Enter Password' />
          </Form.Group>

        </Form>
        <Button onClick={() => loginUser()} className='mt-3 w-100'>Login</Button>
        <Button onClick={() => navi('/register')}>New User Registration</Button>
      </Container>
    </div>
  )
}

export default Login