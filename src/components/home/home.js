import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./home.css"

class Home extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="homeGrid">
                    <Cell col={12}>
                       
                        
                        <div className="bannerText sign">
                            
                            <h1>Brett Sevy</h1>
                            <h2>Web Developer</h2>
                            <p></p>
                            <hr />
                            {/* <p><i class="fa fab fa-html5"></i> | <i class="fa fab fa-css3"></i> | <i class="fa fab fa-js"></i> | <i class="fa fab fa-css3"></i> | <i class="fa fb fa-css3"></i> |</p> */}
                           
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Home;

