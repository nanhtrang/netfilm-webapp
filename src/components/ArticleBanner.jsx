import bg1 from '../assets/images/tvBackground/tv.png'
import bg2 from '../assets/images/tvBackground/mobile-0819.jpg'
import bg3 from '../assets/images/tvBackground/device-pile.png'
import boxshot from '../assets/images/tvBackground/boxshot.png'
import { IoMdDownload } from 'react-icons/io'
import '../assets/css/component.css'
import { FaCheckCircle } from 'react-icons/fa'

const data = [
  {
    title: 'Enjoy on your TV',
    subTitle: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    src: '',
    isLeft: true,
    background: bg1,
    isDownload: false
  },
  {
    title: 'Download your programmes to watch offline',
    subTitle: 'Save your favourites easily and always have something to watch.',
    src: bg2,
    isLeft: false,
    background: bg2,
    isDownload: true,
    imgDownload: boxshot
  },
  {
    title: 'Watch everywhere',
    subTitle: 'Stream unlimited films and TV programmes on your phone, tablet, laptop and TV.',
    src: '',
    isLeft: true,
    background: bg3,
    isDownload: false
  },
  {
    title: 'Create profiles for children',
    subTitle: 'Send children on adventures with their favourite characters in a space made just for them – free with your membership.',
    src: '',
    isLeft: false,
    background: bg3,
    isDownload: false
  }
]


function downloadDock() {
  return (
    <>
      <div className='download-dock-img'></div>
      <div className='download-dock-title'>
        <div className='download-dock-title-text'></div>
        <div className='download-dock-title-downloading'>
          Downloading...
        </div>
      </div>
      <div className='download-dock-loading'></div>
    </>
  )
}

function ArticleRender(props) {
  const isLeft = props.article.isLeft
  const title = props.article.title;
  const subTitle = props.article.subTitle
  const img = props.article.src
  const isDownload = props.article.isDownload
  const imgDownload = props.article.imgDownload
  return (
    <div className={`row ${isLeft ? 'flex-row-reverse' : ''}`} style={{ minHeight: '520px' }}>
      <div className='col-md-12 col-sm-12 col-lg-6'>
        <div className=''>
          <div className='article-title'>
            {title}
          </div>
          <div className='article-subtitle'>
            {subTitle}
          </div>
        </div>
      </div>
      <div className='col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center position-relative '>
        {isDownload && (
          <div className='is-download position-absolute d-flex align-items-center border rounded'>
            <div className='is-download-image'>
              <img src={imgDownload} alt="" />
            </div>
            <div className='is-download-title-container'>
              <div className="is-download-title">Stranger Things</div>
              <div className="is-download-subtitle">Downloading...</div>
            </div>
            <div className="download-icon-container">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-1">
                    <div className="fill-1"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill-1"></div>
                  </div>
                </div>
              </div>
              <IoMdDownload id="icon-download" />
              <FaCheckCircle id="icon-done" />
            </div>
          </div>
        )}
        <div>
          <img style={{ width: '100%' }} src={img} />
        </div>
      </div>
    </div>
  )
}

function ArticleBanner() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div className='divider'></div>
          <div className='article-banner'>
            <ArticleRender
              article={item}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticleBanner