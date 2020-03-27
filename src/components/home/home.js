import React, { Component } from "react";
import "./home.css"
import { Grid, Cell } from "react-mdl";

class Home extends Component {
    render() {
        return (
            // <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="homeGrid">
                    <Cell col={12}>
                        <div className="bannerText sign">
                            <h1>Brett Sevy</h1>
                            <p></p>
                            <h2>Web Developer</h2>
                            <p></p>
                            <hr />
                            {/* <p><i class="fa fab fa-html5"></i> | <i class="fa fab fa-css3"></i> | <i class="fa fab fa-js"></i> | <i class="fa fab fa-css3"></i> | <i class="fa fb fa-css3"></i> |</p> */}
                            <div className="socialLinks">

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
            // </div>
        )
    }
};

export default Home;
