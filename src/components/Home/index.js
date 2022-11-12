import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-e.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = [' ', 'A', 'b', 'd', 'e', 'l', 'i', 'l', 'a', 'h']
    const lastNameArray = ['l', 'a', 'z', 'i', 'r', 'i']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={firstNameArray} idx={15} />
                    <img src={LogoTitle} alt="Web Developer" />
                    
                    <AnimatedLetters letterClass={letterClass} strArray={lastNameArray} idx={16} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Web Developer / javascript / & asp.net Core</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;