
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/style.scss'
import HomeView from './pages/Home';
import Footer from './components/Footer';
import './styles/feature.scss'


function App() {

  return (
    <div className='app'>
      <div className=''>
        <HomeView />
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  )
}

export default App
