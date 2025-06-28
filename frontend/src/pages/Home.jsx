import { Link } from 'react-router-dom';
import './home.css';
import Header from '../components/Header.jsx';
import BottomButton from '../components/BottomButton.jsx';

function Home() {

  return (
    <div id="page-container">
      <div id="main-container">
        <Header />
        <div id="medications-row">

        </div>
        <BottomButton />
      </div>
    </div>
  );
}

export default Home;