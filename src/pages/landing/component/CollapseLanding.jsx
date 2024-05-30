import { useState } from "react"

function CollapseLanding({item}) {
  const [isCollapse, setIsCollapse] = useState(true)

  function changeCollapse() {
    const collapse = isCollapse;
    setIsCollapse(!collapse)
  }
  return (
    <>
      <div className="collapse-container">
        <button onClick={changeCollapse} className="collapse-question">
          <span>x</span>
          {item.question}</button>
        <div className={`collapse-item ${isCollapse ? 'is-collapse' :  ''}`}>{item.answer}</div>
      </div>
    </>
  )  
}

export default CollapseLanding
