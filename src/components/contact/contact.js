import React, { Component } from "react";
import "./contact.css"
import { Grid, ListItemContent } from "react-mdl"
import Foot from '../footer'


class Contact extends Component {
    render() {
        return (
            <div className="contactBody">
                <Grid className="contactGrid sign">

                    <h2>
                        Contact
                        </h2>
                    <h2>Brett Sevy</h2>
                    {/* <img src="https://avatars0.githubusercontent.com/u/58151452?s=460&u=44a02d8271674c2e6e1aa831db3eb0024c5700dd&v=4"
                            alt="avatar" style={{ height: "250px" }} /> */}

                    <div className="contactList">
                        <p>
                            <ListItemContent style={{ fontSize: '30px' }}>
                                <i class="fa fas fa-phone" aria-hidden="true" />
                                    801-915-9397</ListItemContent>
                        </p>
                        <p>
                            <ListItemContent style={{ fontSize: '30px' }}>
                                <a href="mailto:justbrettt@gmail.com">
                                    <i class="fa fas fa-at" aria-hidden="true" />
                                    JustBrettt@gmail.com
                                        </a>
                            </ListItemContent>
                        </p>
                    <hr />
                        {/* <p>
                            <ListItemContent style={{ fontSize: '25px' }}>
                                <a href="https://github.com/BrettSevy" rel="noopener" target="_blank">
                                    <i className="fa fab fa-github" aria-hidden="true" />
                                GitHub
                                </a>
                            </ListItemContent>
                        </p>
                        <p>

                            <ListItemContent style={{ fontSize: '25px' }}>
                                <a href="https://linkedin.com/in/BrettSevy" rel="noopener" target="_blank">
                                    <i class="fa fab fa-linkedin" aria-hidden="true" />
                                LinkedIn
                                </a>
                            </ListItemContent>
                        </p> */}
                    </div>
                </Grid>
                {/* <Foot></Foot> */}
            </div>
        )
    }
};

export default Contact;