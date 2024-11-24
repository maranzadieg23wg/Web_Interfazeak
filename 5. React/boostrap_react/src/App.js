import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './header';
import Menu from './menu';
import Body from './body/body';
import Footer from './footer';


function App() {
  return (
    <div className="App container">
      <Header />
      <Menu />
      <Body />
      <Footer />
    </div>
  );
}
export default App;