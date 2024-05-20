function ArticleRender(props) {
  const isLeft = props.isLeft
  const title = props.title;
  const subTitle = props.subTitle
  const img = props.img
  return (
    <div className='row' style={{minHeight: '474px'}}>
      {isLeft && (
        <div className='col-sm-6'>
          <img src={img}/>
        </div>
      )}
      <div className='col-sm-6'>
        <div className='article-title'>
          {title}
        </div>
        <div className='article-title'>
          {subTitle}
        </div>
      </div>
      {!isLeft && (
        <div className='col-sm-6'>
          <img src={img}/>
        </div>
      )}
    </div>
  )
}

function ArticleBanner() {
  return (
    <div className='article-banner'>
      <ArticleRender isLeft={true} title='123123'/>
      <ArticleRender isLeft={false} title='123123'/>
    </div>
  )
}

export default ArticleBanner