import { Button, Collapse } from 'react-bootstrap'
import './component.css'
import { useState } from 'react';

const data = [
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
    open: false
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. \nYou can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There\'s always something new to discover, and new TV programmes and films are added every week!',
    open: false
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
    open: false
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
    open: false
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
    open: false
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.',
    open: false
  }
]

function FrequentlyQuestion() {
  return (
    <>
      {/* <div className='divider'></div> */}
      {data.map((el, index) => (
        // <Question question={el} key={index} />
        <div key={index}>
          <div>
            <button className="btn btn-primary" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target={`#collapse-${index}`} 
              aria-expanded="false" 
              aria-controls={`#collapse-${index}`}>
              {el.question}
            </button>
          </div>
          <div>
            <div className="collapse" id={`collapse-${index}`}>
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className='divider'></div> */}
    </>
  )
}

export default FrequentlyQuestion