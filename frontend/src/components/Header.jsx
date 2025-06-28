import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header-row">
        <div id="app-title">ReminderRx</div>
        <div id="header-buttons">
        <Link to="/login" id="login-button">Log In</Link>
        <button id="question-button">?</button>
        </div>
    </div>
  );
}

export default Header;
