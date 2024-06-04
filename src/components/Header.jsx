import languagues from "../plugins/i18n/languagues.js";
import {Button, Form} from "react-bootstrap";
import {MdOutlineTranslate} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";


function Header() {

  const navigate = useNavigate()

  const langs = languagues.map((lang) =>
    <option key={lang.code} value={lang.code}>{lang.label}</option>
  )

  return (
    <>
      <div className="d-flex justify-content-center w-100">
        <div className="header-box d-flex align-items-center justify-content-between">
        <Logo/>
          <div className='d-inline-flex'>
            <div>
              <MdOutlineTranslate className='icon-translate'/>
              <Form.Select style={{backgroundColor: "black", color: "white",}}
                           className='d-flex align-items-center lang-select'>
                {langs}
              </Form.Select>
            </div>
            <div className='d-flex justify-content-center align-items-center ms-2'>
              <Button onClick={() => {navigate('/login')}} variant="danger" style={{width: '130px'}}>
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header