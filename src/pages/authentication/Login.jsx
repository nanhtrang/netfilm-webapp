import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import loginBg from '../../assets/images/login/bg.jpg'
import { useEffect } from "react"
import { Button, Row } from "react-bootstrap"
import './style.css'

function Login() {

  useEffect(() => {
    // setBg()
  }, [])

  function setBg() {
    document.getElementById('login-container').style.backgroundImage = `url('${loginBg}')`
  }

  const navigate = useNavigate()
  return (
    <>
      <div className="d-flex flex-column">
        <div id="login-container" className="login-container position-relative">
          <img src={loginBg} className="login-bg" alt="" />

          <div className="login-box">
            <Row className="m-0">
              Login
            </Row>
            <Row className="m-0">
              <div>
                Username
                <input type="text" />
              </div>
            </Row>

            <Row className="m-0">
              <div>
                Username
                <input type="text" />
              </div>
            </Row>

            <Row>
              <div>
                <Button>Login</Button>
              </div>
            </Row>
          </div>

        </div>
        <button onClick={() => { navigate('/landing-page') }}>Landing</button>
        <div className="bg-dark align-self-end">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Login