import { Link, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import loginBg from '../../assets/images/login/bg.jpg'
import { useEffect, useState } from "react"
import { Button, Row } from "react-bootstrap"
import './style.css'
import { FaSquareCheck } from "react-icons/fa6"
import Logo from "../../components/Logo"

function Login() {

  const [isRememberMe, setRememberMe] = useState(false)
  console.log(isRememberMe);

  useEffect(() => {
    setBg()
  }, [])

  function setBg() {
    document.getElementById('login-container').style.backgroundImage = `url('${loginBg}')`
  }

  const navigate = useNavigate()
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <div id="login-container" className="login-container position-relative h-100 d-flex justify-content-center align-items-center">
        <div className="header-box">
        <Logo customClass='login-logo' />
        </div>
          {/* <div className="bg-transparent">
            <Logo />
          </div> */}
          <div className="login-box">
            <Row className="m-0 login-box-title">
              Login
            </Row>
            <Row className="m-0 my-2">
              <div className='field-email-container border rounded'>
                <input type="text" className="inputText" required />
                <span className="floating-label">Email or mobile phone</span>
              </div>
            </Row>

            <Row className="m-0 my-2">
              <div className='field-email-container border rounded'>
                <input type="password" className="inputText" required />
                <span className="floating-label">Password</span>
              </div>
            </Row>

            <Row className="m-0 my-2">
              <Button variant='danger'>
                Đăng nhập
              </Button>
            </Row>
            <Row className="m-0 my-2">
              OR
            </Row>
            <Row className="m-0 my-2">
              <Button variant='secondary'>
                Sử dụng mã đăng nhập
              </Button>
            </Row>

            <Row className="m-0 mb-2 mt-3">
              <div className=" d-flex justify-content-center">
                <Link className="text-light text-decoration-none" to={'/'}>Forgot password?</Link>
              </div>
            </Row>

            <Row className="m-0 my-3">
              <div className="d-flex align-items-center p-0">
                {!isRememberMe && (
                  <div onClick={() => { setRememberMe(true) }} className="square-check c-pointer"></div>
                )}
                {isRememberMe && (
                  <FaSquareCheck className="c-pointer" onClick={() => { setRememberMe(false) }} fontSize={23} />
                )}
                <div className="mx-2">Remember</div>
              </div>
            </Row>

          </div>

        </div>
        <button onClick={() => { navigate('/landing-page') }}>Landing</button>
        <div className="bg-dark mt-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Login