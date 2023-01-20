import "./BottomPartStyles.css";
import python3 from "../assets/python3.png";
import daonsushi from "../assets/daonsushi.png"
import hotel2 from "../assets/hotel2.png"
import java2 from "../assets/java2.png"
import excel2 from "../assets/excel2.png"
import website from "../assets/website.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BottomPart = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return(
        <div className="projects">
            <div className="rectangle"/>
            <div data-aos="fade" className="box1"/>
            <div data-aos="fade" className="box2"/>
            <div data-aos="fade" className="box3"/>
            <div data-aos="fade" className="box4"/>
            <div data-aos="fade" className="box5"/>
            <div data-aos="fade" className="box6"/>


            <div data-aos="fade-down" className="title">
                <h3>P R O J E C T S</h3>
            </div>    

            <div className="python">
                <div data-aos="slide-right" className="text1">
                    <h2>Petal Predictor</h2>

                    <p3>
                        Python (Pandas, SciPy Libraries)
                    </p3>

                    <p>I used the Pandas and SciPy libraries to classify Iris flowers by length from a
                     web database. Different types of algorithms were evaluated for accuracy, including
                     logistic regression, k-Nearest-Neighbor Classifier (KNN), and GaussianNB. In the 
                     end, it was found that the KNN model was the most accurate.</p>
                </div>

                <div data-aos="slide-right" className="picture1">
                    <img className="actualPicture1" src={python3} alt="actualPicture1"/>
                </div>
            </div>



            <div data-aos="slide-right" className="kiwii">
                <div className="text2">
                    <h2>kiwii.</h2>

                    <p3>
                        ReactJS || CSS || HTML || Javascript || Figma
                    </p3>

                    <p>Created digital menus for various resturants in the GTA, which were built with Dart and React,
                        and desgined using Figma. Took physical, paper menus and revamped them into well-designed
                        websites.
                    </p>




                </div>

                <div data-aos="slide-right" className="picture2">
                    <img className="actualPicture2" src={daonsushi} alt="actualPicture2"/>
                </div>
            </div>



            <div className="hotel">
                <div data-aos="slide-right" className="text3">
                    <h2>Hotel Trends-ylvania</h2>

                    <p3>
                        SQL || PowerBI
                    </p3>

                    <p>Cleaned data from a CSV file to create a usable dataset which was then manipulated using SQL queries.
                        The analyzed data was then visualized in an interactive dashboard using PowerBI.
                    </p>
                </div>

                <div data-aos="slide-right" className="picture3">
                    <img className="actualPicture3" src={hotel2} alt="actualPicture3"/>
                </div>
            </div>



            <div className="java">
                <div data-aos="slide-right" className="text4">
                    <h2>A Really Good Rhythm Game!</h2>

                    <p3>
                        Java
                    </p3>

                    <p>Used my knowledge in Java to create a simple rhythm game as part of a culminating
                        project. The program matched certain beats of a song to a moving target, which
                        the user had to time a key input on time.
                    </p>
                </div>

                <div data-aos="slide-right" className="picture4">
                    <img className="actualPicture4" src={java2} alt="actualPicture4"/>
                </div>
            </div>




            <div className="excel">
                <div data-aos="slide-right" className="text5">
                    <h2>Who Bikes?</h2>

                    <p3>
                        Microsoft Excel
                    </p3>

                    <p>Used functions and commands in Excel to manipulate data from a web database.
                        Displayed the data in an interactive dashboard which showed the relationship between
                        bikers and certain demographics.
                    </p>
                </div>

                <div data-aos="slide-right" className="picture5">
                    <img className="actualPicture5" src={excel2} alt="actualPicture5"/>
                </div>
            </div>

            <div className="website">
                <div data-aos="slide-right" className="text6">
                    <h2>My Portfolio Website</h2>

                    <p3>
                        ReactJS || CSS || HTML || Javascript
                    </p3>

                    <p>Used the ReactJS framework to create a dynamic website for my portfolio
                        completely from scratch. Used my skills in Javascript, HTML, and CSS in
                        order to make a creative, visually appealing format.
                    </p>
                </div>

                <div data-aos="slide-right" className="picture6">
                    <img className="actualPicture6" src={website} alt="actualPicture6"/>
                </div>
            </div>


        </div>
    )
};

export default BottomPart;