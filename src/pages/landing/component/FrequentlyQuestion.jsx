import { Button, Container, Row } from 'react-bootstrap'
import CollapseLanding from './CollapseLanding'
import './component.css'
import { FaChevronRight } from 'react-icons/fa'

const data = [
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. \nYou can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There\'s always something new to discover, and new TV programmes and films are added every week!',
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
  }
]

function FrequentlyQuestion() {

  return (
    <>
      <div className='frequently-question article-banner'>
        <h2>Frequently Asked Questions</h2>
        {data.map((item, index) => (
          <div key={index} className='question-item'>
            <CollapseLanding item={item} />
          </div>
        ))}

        <Container className="banner-container-text">
          <Row className='d-flex justify-content-center' style={{ fontSize: '20px' }}>
            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
          </Row>
          <div className=' d-flex justify-content-center mt-3'>
            <div className='field-email-container border rounded'>
              <input type="text" className="inputText" required />
              <span className="floating-label">Email or phone</span>
            </div>
            <div className='btn-start-container me-2 ms-3'>
              <Button variant='danger'>
                Bắt đầu
                <FaChevronRight />
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <div className='divider'></div>
    </>
  )
}

export default FrequentlyQuestion