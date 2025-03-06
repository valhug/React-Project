import Accordion from './accordions'

import './App.css'
import { accordionData } from './utils/content'

function App() {
 

  return (
    <div>
      <div className='accordion'>
        {accordionData.map(({title, content}) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default App
