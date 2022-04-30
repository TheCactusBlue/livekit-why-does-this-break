import ReactDOM from 'react-dom/client'
import {useState} from "react";
import {LiveKitRoom} from "livekit-react";

import './index.css';
import 'livekit-react/dist/index.css';

const liveKitToken = '';
export function LiveKitTester() {
  const [clicked, setClicked] = useState(false);
  if (!clicked)
    return <button onClick={() => {
      console.log('I was clicked');
      setClicked(true);
    }}>click me</button>;
  return <LiveKitRoom url="ws://localhost:7880" token={liveKitToken} />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div><LiveKitTester/></div>
)
