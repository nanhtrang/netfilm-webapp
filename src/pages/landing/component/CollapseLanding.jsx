import { useState } from "react"
import { BsPlusLg } from "react-icons/bs";

function CollapseLanding({item, id}) {
  const [isCollapse, setIsCollapse] = useState(true)

  function changeCollapse() {
    const collapse = isCollapse;
    if (isCollapse) {
      document.getElementById(id).style.rotate = '45deg'
    } else {
      document.getElementById(id).style.rotate = '0deg'
    }
    setIsCollapse(!collapse)
  }
  return (
    <>
      <div className="collapse-container">
        <button onClick={changeCollapse} className="collapse-question">
          <span>
            <BsPlusLg className="collapse-icon" id={id} fontSize={35} />  
          </span>
          {item.question}</button>
        <div className={`collapse-item ${isCollapse ? 'is-collapse' :  ''}`}>{item.answer}</div>
      </div>
    </>
  )  
}

export default CollapseLanding
