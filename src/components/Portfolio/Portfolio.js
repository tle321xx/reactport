import { useState, useEffect } from 'react'
import './Portfolio.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import profolioData from '../../components/Data/portfolio.json'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(profolioData)

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
          return () => clearTimeout(timer);
      }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx)=>{
                        return  (
                            <div className="image-box" key={idx}>
                                <img src={port.cover} alt="portfolio" className="portfolio-image"/>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className='btn' onClick={()=> window.open(port.url)}>view</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
        <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>
        <div className="">{renderPortfolio(profolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
