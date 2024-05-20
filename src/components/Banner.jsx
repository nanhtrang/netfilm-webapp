import Header from "./Header.jsx";
import {Button, Container, Row} from "react-bootstrap";
import {FaChevronRight} from "react-icons/fa";


function Banner() {
  return (
    <div className="banner-container position-relative">
      {/*<Image className='banner-image' src={bannerSrc} />*/}
      <Row className='position-absolute banner-image'></Row>
      <Header/>
      <Container className="banner-container-text">
        <Row className='banner-text'>
          Thưởng thức những bộ phim đình đám, chương trình truyền hình nổi bật và hơn thế nữa chỉ từ 70.000 ₫.
        </Row>
        <Row className='d-flex justify-content-center' style={{fontSize: '24px'}}>
          Tham gia hôm nay, hủy bất cứ lúc nào
        </Row>
        <Row className='d-flex justify-content-center' style={{fontSize: '20px'}}>
          Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
        </Row>
        <Row className='d-flex'>
          <div className='field-email-container'>
            <label>
              Địa chỉ email
            </label>
            <input type='email' autoComplete='email' className='form-control'/>
          </div>
          <div>
            <Button variant='danger'>
            Bắt đầu
              <FaChevronRight/>
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Banner;