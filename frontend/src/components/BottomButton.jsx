import './bottomButton.css';
import { Link } from 'react-router-dom';

function BottomButton() {
  return (
    <div id="manage-button-row">
        <Link to="/manage" id="manage-button">Manage Medications</Link>
    </div>
  );
}

export default BottomButton;