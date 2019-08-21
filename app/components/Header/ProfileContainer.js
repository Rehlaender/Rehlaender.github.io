import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup';

import profilePicture from '../../../assets/user.png';

export const ProfileContainer =  (props) => {  
  let [mood, setMood] = useState(false);
  let [isAnimating, setIsAnimating] = useState(false);
  let [count, setCount] = useState(0);
  let [running, setRunning] = useState(false);
  
  const run_for = 2500;

  const clickOnProfilePicture = (e) => {
    isAnimating && e && e.preventDefault();

    setMood(!mood);
    if (running) {
      setCount(count + 1)
    } else {
      setRunning(true);
      setCount(1);
      setTimeout(function() {
        end_counter();
      }, run_for);
    }
  }

  const end_counter = () => {
    setRunning(false);
    startAnimation();
  };

  const startAnimation = () => {
    setIsAnimating(true);
  }
  const endAnimation = () => {
    setCount(0);
    setIsAnimating(false);
    setMood(false);
  }

  return (
    <div className="profile-container" id="profile-container">
      {count > 0 && (<div className="heart-container">
        +{ !isAnimating ? (
              <span>{count}</span>
            ) : (
              <CountUp 
                start={count} 
                end={0}
                duration={2}
                onEnd={() => endAnimation()}
                onStart={() => startAnimation()}
              />
            )
          }
          <span className="heart">♥</span>
      </div>)}

      {isAnimating && <HeartFire hearts={count} />}
      <img 
        onClick={() => {clickOnProfilePicture();}}
        style={{cursor: isAnimating && 'none', pointerEvents: isAnimating && 'none'}}
        className="profilePicture"
        src={mood ? '' : profilePicture}
        alt="yeah, i look like that"
        title="yeah, i look like that"
      />
    </div>
  )
}

const HeartFire = (props) => {
  const {hearts} = props;
  
  let [heartsInherit, setHeartsInherit] = useState(false);
  
  useEffect(() => {
    if(hearts>heartsInherit) {
      setHeartsInherit(hearts);
    }
  }, [hearts]);

  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateRandomPosition = () => {
    return `${generateRandomNumber(40, 0)}px`
  }

  const returnArrayOfHearts = () => {
    const arrayOfHearts = Array.from(Array(heartsInherit).keys()) 
    return arrayOfHearts.map((heart, i) => {
      return (
        <span 
        key={i} 
        className="flyingHeart"
        style={{animationDelay: `${i}0ms`, right: generateRandomPosition()}}
        >♥</span>
      )
    })
  }

  return (
    <div className="flyingheart-container">
      {returnArrayOfHearts()}
    </div>
  )
}