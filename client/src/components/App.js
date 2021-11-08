import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Game from './XOgame/Game'
import Header from './Header'
import Chat from './Chat'
import LobbiesList from './LobbiesList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Route path="/" exact component={LobbiesList} />
        <Route path={`/xo${id}`} exact component={Game} /> */}
        <Route path={`/chat`} exact component={Chat} />
        <Route path={`/xo`} exact component={Game} />
      </div>
    </BrowserRouter>
  );
}

export default App;
