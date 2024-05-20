import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const links = [
  { title: 'Câu hỏi thường gặp', src: '/' },
  { title: 'Trung tâm trợ giúp', src: '/' },
  { title: 'Tài khoản', src: '/' },
  { title: 'Trung tâm đa phương tiện', src: '/' },
  { title: 'Quan hệ với nhà đầu tư', src: '/' },
  { title: 'Việc làm', src: '/' },
  { title: 'Các cách xem', src: '/' },
  { title: 'Điều khoản sử dụng', src: '/' },
  { title: 'Quyền riêng tư', src: '/' },
  { title: 'TÙy chọn cookie', src: '/' },
  { title: 'Thông tin doanh nghiệp', src: '/' },
  { title: 'Liên hệ với chúng tôi', src: '/' },
  { title: 'Kiểm tra tốc độ', src: '/' },
  { title: 'Thông báo pháp lý', src: '/' },
  { title: 'Chỉ có trên Netflix', src: '/' },
]

// function generate() {
//   return (
//     <Row>
//       {links.map((el, index) => (
//         <Col key={index} sm={3}>
//           <Link to={el.src}>
//             {el.title}
//           </Link>
//         </Col>
//       ))}
//     </Row>
//   )
// }

// const people = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
//   { id: 4, name: 'David' }
// ];
//
// const Footer = () => {
//   return (
//     <ul>
//       {people.map((person) => (
//         <li key={person.id}>{person.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default PeopleList;

function Footer() {
  return (
    <div className='mt-auto footer-container mx-auto mb-4'>
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