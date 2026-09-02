import { useEffect, useRef, useState } from "react";
import './Home.css'
import NetflixLogo from '../../assets/full-logo.svg'
import Button from '../../components/Button/Button'
import InputField from '../../components/InputField/Field'
import MovieCard from '../../components/MovieCard/MovieCard'
import Num1Movie from '../../assets/TopMovies/1.jpg'
import Num2Movie from '../../assets/TopMovies/2.jpg'
import Num3Movie from '../../assets/TopMovies/3.jpg'
import Num4Movie from '../../assets/TopMovies/4.jpg'
import Num5Movie from '../../assets/TopMovies/5.jpg'
import Num6Movie from '../../assets/TopMovies/6.jpg'
import Num7Movie from '../../assets/TopMovies/7.jpg'
import Num8Movie from '../../assets/TopMovies/8.jpg'
import Num9Movie from '../../assets/TopMovies/9.jpg'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Num10Movie from '../../assets/TopMovies/10.jpg'
import DecorCard from "../../assets/DecorCard/DecorCard";
import TelevisionGraphics from '../../assets/Graphics/television.svg'
import DownloadSmallGraphics from '../../assets/Graphics/download-core-small.svg'
import TelescopeSmallGraphics from '../../assets/Graphics/telescope-core-small.svg'
import ProfilesGraphics from '../../assets/Graphics/profiles-core-small.svg'
import QBCard from "../../components/QuestionBoxCard/QBCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    const movieContainer = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const updateButtons = () => {
        const element = movieContainer.current;

        if (!element) return;

        setShowLeft(element.scrollLeft > 0);

        setShowRight(
            element.scrollLeft + element.clientWidth <
            element.scrollWidth - 1
        );
    };

    const scroll = (direction) => {
        const element = movieContainer.current;

        if (!element) return;

        element.scrollBy({
            left: direction * element.clientWidth * 0.8,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        updateButtons();

        const element = movieContainer.current;

        if (!element) return;

        element.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);

        return () => {
            element.removeEventListener("scroll", updateButtons);
            window.removeEventListener("resize", updateButtons);
        };
    }, []);

    return (
        <div className='landing-page-container'>
            <div className="lp-main">
                <div className="lpm-nav">
                    <div className="lpm-logo">
                        <img src={NetflixLogo} width={148} style={{userSelect: 'none'}}/>
                    </div>
                    <div className="lpmn-action">
                        <Button text="English" spClass={'lang-button'} />
                        <Button text="Sign In" />
                    </div>
                </div>
                <div className="lpm-hero">
                    <span className='lpmh-main'>Unlimited movies, shows, and more</span>
                    <span className='lpmh-sub'>Starts at ₹149. Cancel at any time.</span>
                    <span className='lpmh-tag'>Ready to watch? Enter your email to create or restart your membership.</span>
                    <div className="lpmh-info">
                        <InputField text={"Email address"} />
                        <Button text={"Get started"} spClass={'large-gs'} />
                    </div>
                </div>
            </div>
            <div className="lp-bm">
                <section className="lp-bm-section">
                    <span className='lp-bm-h'>Trending Now</span>
                    <div className="lp-bmc-wrapper">

                        {showLeft && (
                            <button
                                className="lp-bmc-btn lp-bmc-left"
                                onClick={() => scroll(-1)}
                                aria-label="Previous movies"
                            >
                                <ChevronLeft size={37} strokeWidth={2} />
                            </button>
                        )}

                        <div className="lp-bmc" ref={movieContainer}>
                            <MovieCard image={Num1Movie} rank="1" />
                            <MovieCard image={Num2Movie} rank="2" />
                            <MovieCard image={Num3Movie} rank="3" />
                            <MovieCard image={Num4Movie} rank="4" />
                            <MovieCard image={Num5Movie} rank="5" />
                            <MovieCard image={Num6Movie} rank="6" />
                            <MovieCard image={Num7Movie} rank="7" />
                            <MovieCard image={Num8Movie} rank="8" />
                            <MovieCard image={Num9Movie} rank="9" />
                            <MovieCard image={Num10Movie} rank="10" />
                        </div>

                        {showRight && (
                            <button
                                className="lp-bmc-btn lp-bmc-right"
                                onClick={() => scroll(1)}
                                aria-label="Next movies"
                            >
                                <ChevronRight size={37} strokeWidth={2} />
                            </button>
                        )}

                    </div>
                </section>
                <section className="lp-bm-section">
                    <span className='lp-bm-h'>More reasons to join</span>
                    <div className="lp-bmc">
                        <DecorCard 
                        heading={"Enjoy on your TV"} 
                        text={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}
                        graphics={TelevisionGraphics}
                        />
                        <DecorCard 
                        heading={"Download your shows to watch offline"} 
                        text={"Save your favourites easily and always have something to watch."}
                        graphics={DownloadSmallGraphics}
                        />
                        <DecorCard 
                        heading={"Watch everywhere"} 
                        text={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
                        graphics={TelescopeSmallGraphics}
                        />
                        <DecorCard 
                        heading={"Create profiles for kids"} 
                        text={"Send kids on adventures with their favourite characters in a space made just for them — free with your membership."}
                        graphics={ProfilesGraphics}
                        />
                    </div>
                </section>
                <section className="lp-bm-section">
                    <span className='lp-bm-h'>Frequently Asked Questions</span>
                    <div className="lp-bmc lp-bmc-qs">
                        <QBCard question={"What is Netflix?"} answere={"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. \n \nYou can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"}/>
                        <QBCard question={"How much does Netflix cost?"} answere={"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month."}/>
                        <QBCard question={"Where can I watch?"} answere={"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n \nYou can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."}/>
                        <QBCard question={"How do I cancel?"} answere={"Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}/>
                        <QBCard question={"What can I watch on Netflix?"} answere={"Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}/>
                        <QBCard question={"Is Netflix good for kids?"} answere={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. \n \nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}/>
                    </div>
                </section>
            </div>
            <div className="footer-sec">
                <Footer />
            </div>
        </div>
    )
}

export default Home