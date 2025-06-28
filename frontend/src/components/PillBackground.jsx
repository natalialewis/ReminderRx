import { useEffect, useState } from 'react';
import img1 from '../assets/pill-1.PNG';
import img2 from '../assets/capsule-2.PNG';
import img3 from '../assets/pill-3.png';
import img4 from '../assets/capsule-4.png';
import './pillBackground.css';

function PillBackground() {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 2);
    }, 2000); // Change animation every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Pill pattern sequence
  const fullPattern = [img1, img2, img3, img4];

  // Determines the size of each pill image based on responsive breakpoints
  const getPillSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) return '30px'; // Mobile
    if (screenWidth < 1024) return '40px'; // Tablet
    return '55px'; // Desktop
  };

  // Determines how many columns of pills to render based on screen width
  const getGridWidth = () => {
    const screenWidth = window.innerWidth;
    

    // How many columns fit in the screen width with no blank space
    const numOfCols = Math.floor(screenWidth / parseInt(getPillSize()));

    var colsWithSpace = numOfCols;
    var iteration = 1;
    var search = true;

    // Finds the maximum number of columns that can fit the pattern with some blank space
    while (search) {
        if ((numOfCols / (4 * iteration - 1)) >= 3) {
            colsWithSpace = (4 * iteration - 1);
            iteration++;
        } else {
            search = false;
        }
    }

    return Math.floor(colsWithSpace);
  };

  // Determines how many rows of pills to render based on screen height
  const getRowNum = () => {
    const screenHeight = window.innerHeight;

    // How many rows fit in the screen height with no blank space
    const numOfRows = Math.floor(screenHeight / parseInt(getPillSize()));

    var rowsWithSpace = numOfRows;
    var iteration = 1;
    var search = true;

    // Finds the maximum number of rows that can fit the pattern with some blank space
    while (search) {
        if ((numOfRows / (4 * iteration - 1)) >= 3) {
            rowsWithSpace = (4 * iteration - 1);
            iteration++;
        } else {
            search = false;
        }
    }

    return Math.floor(rowsWithSpace);
  }

  // Renders a single pill image with animation
  const renderPill = (imageSrc, rowIndex, colIndex) => {
    // Continuous diagonal wave animation
    const animationDelay = (rowIndex + colIndex) * 0.2; // Stagger the animation
    const animationClass = 'pill-animate';
    
    return (
      <div 
        key={`${rowIndex}-${colIndex}`}
        className={`pill-container ${animationClass}`}
        style={{
          width: getPillSize(),
          height: getPillSize(),
          animationDelay: `${animationDelay}s`,
        }}
      >
        <img 
          src={imageSrc} 
          alt="pill" 
          className="pill-image"
        />
      </div>
    );
  };

  const gridWidth = getGridWidth();
  const gridHeight = getRowNum();

  // Renders the whole grid of pills
  return (
    <div className="pill-background">
      <div className="pill-grid">
        {Array.from({ length: gridHeight }, (_, rowIndex) => (
          <div key={rowIndex} className="pill-row">
            {Array.from({ length: gridWidth }, (_, colIndex) => {
              // Calculate the starting index for this row
              // Each row continues from where the previous row left off
              const startingIndex = rowIndex * gridWidth;
              const patternIndex = (startingIndex + colIndex) % 4;
              const pillImage = fullPattern[patternIndex];
              
              return renderPill(pillImage, rowIndex, colIndex);
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PillBackground;