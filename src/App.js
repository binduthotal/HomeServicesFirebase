import './App.css';
import './Components/assets/styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routing from './Components/navs/Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
