import React from 'react';
import './portfolio.css';
import Kobe from "./assets/kobe.png";
import Planner from "./assets/planner.png";
import Weather from "./assets/weather.png";
import Burgers from "./assets/burgers.png";
import Coin from "./assets/coin.jpg";
import Fitness from "./assets/fitness.png";
import Stocks from "./assets/stocks.png";


function Portfolio() {
    return (
        <div className="sign">
            <h1>Portfolio</h1>
            <ul id="hexGrid">
                <li className="hex">
                    <a className="hexIn" href="https://brettsevy.github.io/hwQuiz/" rel="noopener" target="_blank">
                        <img src={Kobe} alt="Brett Sevy Kobe Bryant Quiz" />
                        <h1>Quiz on Kobe Bryant</h1>
                        <p>Technology used: JavaScript, HTML, CSS Bootstrap</p>
                    </a>
                </li>
                <li class="hex">
                    <a class="hexIn" href="https://brettsevy.github.io/hwPlanner/" rel="noopener" target="_blank">
                        <img src={Planner} alt="" />
                        <h1>Work Day Scheduler</h1>
                        <p>Technology Used: JavaScript, HTML, CSS</p>
                    </a>
                </li>
                <li class="hex">
                    <a class="hexIn" href="https://brettsevy.github.io/hwWeather/" rel="noopener" target="_blank">
                        <img src={Weather} alt="" />
                        <h1>Weather Forcast</h1>
                        <p>Technology Used: JavaScript, JQuery, HTML, CSS, AJAX, API</p>
                    </a>
                </li>
                <li class="hex">
                    <a class="hexIn" href="https://claudhue.github.io/Project1/" rel="noopener" target="_blank">
                        <img src={Coin} alt="" />
                        <h1>Coin Flip Game</h1>
                        <p>Technology Used: JavaScript, JQuery, HTML, CSS, AJAX, third-party API, Bootstrap</p>
                    </a>
                </li>
                <li class="hex">
                    <a class="hexIn" href="https://intense-shore-00387.herokuapp.com/" rel="noopener" target="_blank" >
                        <img src={Burgers} alt="" />
                        <h1>Eat the Burgers</h1>
                        <p>Technology Used: Node.js, MySQL, Express, Handlebars, ORM, MVC, JavaScript </p>
                    </a>
                </li>
                <li class="hex">
                    <a class="hexIn" href="https://limitless-journey-76220.herokuapp.com/" rel="noopener" target="_blank">
                        <img src= {Fitness} alt="" />
                        <h1>Weekly Fitness Tracker</h1>
                        <p>Technology Used: MongoDB, Express, Node.js, JavaScript</p>
                    </a>
                </li>
                <li class="hex">
                    <a class="hexIn" href="https://project2-umesh-brett-javier-sa.herokuapp.com/" rel="noopener" target="_blank">
                        <img src={Stocks} alt="" />
                        <h1>Stock Portfolio</h1>
                        <p>Technology Used: MySQL, Handlebars, Express, Node.js, ORM, JavaScript</p>
                    </a>
                </li>

            </ul>
            <hr />
            

        </div>
    )
};

export default Portfolio;