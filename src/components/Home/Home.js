import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['','w', 'a', 'c', 'h', 'i', 'r', 'a', 'w', 'i', 't']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.',]
  const welcome = ['W','e','l','c','o','m','e','','t','o','','o','u','r','','w','e','b','s','i','t','e','!']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
      return () => clearTimeout(timer);
  }, []);
  

  return (
    <><Loader type="pacman"/>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters
            letterClass={letterClass}
            strArray={welcome}
            idx={13}
          />
          <br />
          <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Junior Software Developer / JavaScript / React</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home
