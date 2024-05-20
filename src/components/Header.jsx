import languagues from "../plugins/i18n/languagues.js";
import {Button, Form, FormSelect} from "react-bootstrap";
import { PiTranslateThin } from "react-icons/pi";
import { MdOutlineTranslate } from "react-icons/md";


function Header() {

  const langs = languagues.map((lang) =>
    <option key={lang.code} value={lang.code}>{lang.label}</option>
  )
  return (
    <>
      <div className="d-flex justify-content-center w-100">
        <div className="header-box d-flex align-items-center justify-content-between">
          <div className="header-logo">NETFILM</div>
          <div className='d-inline-flex'>
            <div>
              <MdOutlineTranslate className='icon-translate'/>
              <Form.Select style={{backgroundColor: "black", color: "white", }} className='d-flex align-items-center lang-select'>
                {langs}
              </Form.Select>
            </div>
            <div className='d-flex justify-content-center align-items-center ms-2'>
              <Button variant="danger" style={{ width: '130px' }}>
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