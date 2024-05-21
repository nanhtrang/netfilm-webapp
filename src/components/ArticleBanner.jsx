import bg1 from '../assets/images/tvBackground/tv.png'
import bg2 from '../assets/images/tvBackground/mobile-0819.jpg'
import bg3 from '../assets/images/tvBackground/device-pile.png'

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
    isDownload: true
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
  const isLeft = props.isLeft
  const title = props.title;
  const subTitle = props.subTitle
  const img = props.img
  return (
    <div className='row' style={{minHeight: '520px'}}>
      {!isLeft && (
        <div className='col-sm-6 position-relative'>
          <div className='is-download position-absolute'>
            asdasdasd
          </div>
          <div>
            <img src={img}/>
          </div>
        </div>
      )}
      <div className='col-sm-6 d-flex align-items-center'>
        <div>
          <div className='article-title'>
            {title}
          </div>
          <div className='article-subtitle'>
            {subTitle}
          </div>
        </div>
      </div>
      {isLeft && (
        <div className='col-sm-6'>
          <div className='is-download'>
            asdasdasd
          </div>
          <div>
            <img src={img}/>
          </div>
        </div>
      )}
    </div>
  )
}

function ArticleBanner() {
  return (
    <div>
      {data.map((item, index) => (
        <>
          <div className='divider'></div>
          <div className='article-banner'>
            <ArticleRender
              isLeft={item.isLeft}
              title={item.title}
              subTitle={item.title}
              img={item.src}
            />
          </div>
        </>
      ))}
    </div>
  )
}

export default ArticleBanner