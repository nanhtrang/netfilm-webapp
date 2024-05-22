import bg1 from '../../../assets/images/tvBackground/tv.png'
import bg2 from '../../../assets/images/tvBackground/mobile-0819.jpg'
import bg3 from '../../../assets/images/tvBackground/device-pile.png'
import bg4 from '../../../assets/images/tvBackground/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png'
import boxshot from '../../../assets/images/tvBackground/boxshot.png'
import { IoMdDownload } from 'react-icons/io'
import './component.css'
import { FaCheckCircle } from 'react-icons/fa'
// import video from '../assets/images/tvBackground/video-tv-0819.m4v'

const data = [
  {
    title: 'Enjoy on your TV',
    subTitle: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    img: null,
    isLeft: false,
    background: bg1,
    isDownload: false,
    imgDownload: null,
    video: './assets/landingPage/video-tv-0819.m4v'
  },
  {
    title: 'Download your programmes to watch offline',
    subTitle: 'Save your favourites easily and always have something to watch.',
    img: bg2,
    isLeft: true,
    background: null,
    isDownload: true,
    imgDownload: boxshot,
    video: null
  },
  {
    title: 'Watch everywhere',
    subTitle: 'Stream unlimited films and TV programmes on your phone, tablet, laptop and TV.',
    img: null,
    isLeft: false,
    background: bg3,
    isDownload: false,
    imgDownload: null,
    video: './assets/landingPage/video-devices.m4v'
  },
  {
    title: 'Create profiles for children',
    subTitle: 'Send children on adventures with their favourite characters in a space made just for them – free with your membership.',
    img: bg4,
    isLeft: true,
    background: null,
    isDownload: false,
    imgDownload: null,
    video: null
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
  const article = props.article
  const index = props.index
  return (
    <div className={`row py-4 pb-5 mb-5 ${article.isLeft ? 'flex-row-reverse' : ''}`} style={{ minHeight: '520px' }}>
      <div className='col-md-12 col-sm-12 col-lg-6 d-flex align-items-center'>
        <div className=''>
          <div className='article-title'>
            {article.title}
          </div>
          <div className='article-subtitle'>
            {article.subTitle}
          </div>
        </div>
      </div>
      <div className='col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center position-relative '>
        {article.isDownload && (
          <div className='is-download position-absolute d-flex align-items-center border rounded'>
            <div className='is-download-image'>
              <img src={article.imgDownload} alt="" />
            </div>
            <div className='is-download-title-container p-3'>
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
        {/* <div className='article-image' style={{backgroundImage: `url(${background})`}}> */}
        <div className='d-flex align-items-center'>
          <div id={`video-banner-` + index}  className='position-absolute article-video overflow-hidden'>
            <video autoPlay muted>
              <source src={article.video} />
            </video>
          </div>
          <div>
            <img className='w-100' src={article.background} />
            <div>
              <img style={{ width: '100%' }} src={article.img} />
            </div>
          </div>

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
              index={index}
            />
          </div>
        </div>
      ))}
      <div className='divider'></div>
    </div>
  )
}

export default ArticleBanner