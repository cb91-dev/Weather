
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import Main from './screens/Main';


const App = () =>{


  return (
    <TailwindProvider utilities={utilities}>
      <Main/>
    </TailwindProvider>
  )
}

export default App