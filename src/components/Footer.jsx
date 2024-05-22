import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const links = [
  {title: 'Câu hỏi thường gặp', src: '/'},
  {title: 'Trung tâm trợ giúp', src: '/'},
  {title: 'Tài khoản', src: '/'},
  {title: 'Trung tâm đa phương tiện', src: '/'},
  {title: 'Quan hệ với nhà đầu tư', src: '/'},
  {title: 'Việc làm', src: '/'},
  {title: 'Các cách xem', src: '/'},
  {title: 'Điều khoản sử dụng', src: '/'},
  {title: 'Quyền riêng tư', src: '/'},
  {title: 'TÙy chọn cookie', src: '/'},
  {title: 'Thông tin doanh nghiệp', src: '/'},
  {title: 'Liên hệ với chúng tôi', src: '/'},
  {title: 'Kiểm tra tốc độ', src: '/'},
  {title: 'Thông báo pháp lý', src: '/'},
  {title: 'Chỉ có trên Netflix', src: '/'},
]

function Footer() {
  return (
    <div className='mt-auto pt-5 footer-container mx-auto pb-5'>
      <div className='row'>
        {links.map((el, index) => (
          <div className='col-sm-3 my-2' key={index}>
            <a href={el.src} style={{color: 'white'}}>
              {el.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer