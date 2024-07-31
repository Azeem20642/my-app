import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import { useSpring, animated } from '@react-spring/web';
import './SignUp.css';

function SignUp() {
  const leftSectionProps = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)' },
    config: { tension: 280, friction: 60 }
  });

  const rightSectionProps = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(100px)' },
    config: { tension: 280, friction: 60 }
  });

  return (
    <div className="sign-up-container">
      <animated.div className="sign-up-left-section" style={leftSectionProps}>
        <h1>Welcome to our community</h1>
        <p>Fuse helps developers to build organized and well-coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
        <div className="sign-up-rounded-images">
          <img src="https://t4.ftcdn.net/jpg/05/58/66/65/360_F_558666575_TtzKk34vTXM4ZEjV7J0ZtCQLqKlEh2Qc.jpg" alt="Employee 1" />
          <img src="https://media.istockphoto.com/id/1370723788/photo/shot-of-a-young-businessman-using-a-laptop-in-an-office-at-work.jpg?s=612x612&w=0&k=20&c=-p7XkB80sY23ki0VYbAtUvzvDtjHE7eH_lFExZcL9AU=" alt="Employee 2" />
          <img src="https://as2.ftcdn.net/v2/jpg/07/10/21/27/1000_F_710212780_p2K99nLyq8nTDHVAzquVDcIXw0DCOFnR.jpg" alt="Employee 3" />
          <img src="https://as1.ftcdn.net/v2/jpg/05/73/60/04/1000_F_573600448_6gI5Cb7UdEzjRW3YjBureEO4O8jrtwWc.jpg" alt="Employee 4" />
          <img src="https://as2.ftcdn.net/v2/jpg/07/09/63/47/1000_F_709634763_k2b5H1Bi4GwLh9qLsCa6rXKlUKUGd5pT.jpg" alt="Employee 5" />
        </div>
        <p>More than 17k people joined us, it’s your turn.</p>
      </animated.div>
      <animated.div className="sign-up-right-section" style={rightSectionProps}>
        <img src="https://example.com/logo.png" alt="Logo" className="logo" />
        <h2>Sign Up</h2>
        <SignUpForm />
        <div className="login-link">
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </div>
      </animated.div>
    </div>
  );
}

export default SignUp;
