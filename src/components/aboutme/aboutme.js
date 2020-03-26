import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import "./aboutme.css";


class AboutMe extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="aboutMeGrid">
                    <Cell col={12}>
                        <img
                            src="https://brettsevy.github.io/portfolio/assets/IMG_0252[51]2.jpg"
                            alt="avatar"
                            className="aboutMeAvatarImg"
                        />

                        <div className="aboutMeBannerText sign">
                            <p>
                                I am a full stack web developer with a Certificate from SMU, where I learned: HTML5, CSS3, JavaScript, jQuery, Node.js, Java, Express.js, React.js, Database Theory, MongoDB, MySQL, Git, and more. 10+ years of experience in logistic management. A professional leader with demonstrated expertise in employee development by implementing an employee training program designed to; decrease attrition, reduce overtime, improve quality and accuracy, and increase production goals. With a passion for problem solving and development, I am seeking a role as a web developer at a company where I can learn, grow, and continue to master the craft. The combination of my technical expertise and emotional intelligence make me a unique team member who would add value and efficiency to your team.
                            </p>
                            <p>
                                When not working, I can be found doing dad things with a tiny human, searching for a cheap house with “lots of potential” so I can construct an open concept kitchen like the HGTV designers, passive-aggressively talking to the trees in my yard about dropping leaves right after I mow the lawn, regretting doing crossfit workouts while doing crossfit workouts, drinking mediocre whiskey, listening to podcasts, and watching all the sports on TV with his high-spirited wife.
                            </p>

                            <hr />

                            <p></p>

                            <div className="aboutMeSocialLinks sign">

                                {/* GITHUB LINK */}
                                <a href="https://github.com/BrettSevy" rel="noopener" target="_blank">
                                    <i className="fa fab fa-github" aria-hidden="true" />
                                </a>

                                {/* LINKEDIN LINK */}
                                <a href="https://linkedin.com/in/BrettSevy" rel="noopener" target="_blank">
                                    <i class="fa fab fa-linkedin" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default AboutMe;