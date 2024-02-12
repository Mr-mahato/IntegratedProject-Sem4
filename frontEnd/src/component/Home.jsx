import './Navbar.css'
import sidepage from '../assest/Firstpage.jpeg'
import lower_left from '../assest/lower-left.jpg';
import lower_right from '../assest/lower-right.jpg'
function Home() {
    return (
        <>
            <div className="container">
                <div className="top-left">
                    <h1>AgroGuide</h1>
                </div>
                <div className="top-right">
                    <p>About</p>
                    <p>Initiative</p>
                    <p>Contact Us</p>
                    <p>Home</p>
                    <button>Take Action</button>
                </div>
                <div className="bottom-left">
                    <h1>Protecting natural habitats from extinction.</h1>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="lower-part">
                <div className="left-part">
                    <p>
                        Climate change threatens every part of the planet. It’s a global problem that requires global cooperation.
                    </p>
                </div>
                <div className="right-part">
                    <p>Our mission is to create international consensus around the climate emergency, as well a shared plan for saving the planet’s most exceptional wild places.</p>
                </div>
            </div>
            <div className="lower-mid">
                <div className="left-part">
                    <div className="makeCenter">
                        <p>Changing the world is possible. We’ve done it before.</p>
                        <p>Our leadership team bring years of experience to bear on the greatest challenge of our time. We’re results driven, with a proven record of previous successes.</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className="right-part">
                    <img src={lower_right} alt="This is right side image" />
                </div>
            </div>
            <div className="lower-mid">
                <div className="right-part">
                    <img src={lower_left} alt="This is right side image" />
                </div>
                <div className="left-part">
                    <div className="makeCenter">
                        <p>Ready to take the next step? </p>
                        <p>This is a movement of billions. Whether you’re most comfortable contributing time to help achieve our advocacy goals, money to help us grow, or energy to put political pressure on our governments to change, we need you on our team.</p>
                        <button>Take Action</button>
                    </div>
                </div>
            </div>
            <div className="lower-center">
                <h1> "Agroguide has helped accomplish over 200 of its partners’ major conservation goals. They inspire everyone to care for the planet."</h1>
            </div>
            <div className="nav-top">
                <div className="left-nav-top">
                    <p>Let’s meet up in real life to share in the beauty of the natural world.</p>
                </div>
                <div className="right">
                    <p>Sign up to be the first to know about our events. In sit amet felis malesuada, feugiat purus eget, varius mi. Nulla lectus ante, consequat et ex eget, feugiat tincidunt metus.</p>
                    <input type="email" name="email" id="email" placeholder='Enter your mail' />
                    <button>Sign Up</button>
                </div>

            </div>
                <footer>
                    <div className="left">
                        <p>AgroGuide</p>
                        <p>Chitkara University</p>
                        <p>Himachal Pradesh</p>
                        <a href="tel:+91xxxxx">91xxxx</a>
                    </div>
                    <div className="right">
                        <div className="foot-left">
                            <p>Our Work</p>
                            <a href="#">About</a>
                            <a href="#">Initiatives</a>
                            <a href="#">Take Action</a>
                        </div>
                        <div className="foot-right">
                            <p>Follow</p>
                            <a href="#">Twitter</a>
                            <a href="#">Linkedin</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>
                                    
                </footer>
        </>
    )
}

export default Home;