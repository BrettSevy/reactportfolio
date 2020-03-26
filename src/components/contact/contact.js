import React, { Component } from "react";
import "./contact.css"
import { Grid, Cell, ListItem, List, ListItemContent } from "react-mdl"

class Contact extends Component {
    render() {
        return (
            <div className="contactBody">
                <Grid className="contactGrid sign">
                    <Cell col={6}>

                        <h2>Brett Sevy</h2>
                        
                        {/* <img src="https://avatars0.githubusercontent.com/u/58151452?s=460&u=44a02d8271674c2e6e1aa831db3eb0024c5700dd&v=4"
                            alt="avatar" style={{ height: "250px" }} /> */}
                        <h4>
                            Feel free to reach out with any questions, collaboration ideas, or just to say hi!
                        </h4>
                    </Cell>
                    <Cell col={6}>
                        <h2>
                            Contact Me
                        </h2>
                        <hr />

                        <div className="contactList">
                        <List>
                            <ListItem>
                                <ListItemContent>
                                <i class="fa fas fa-phone" aria-hidden="true"/>
                                    801-915-9397</ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent>
                            <a href="mailto:justbrettt@gmail.com" className="email">
                                <i class="fa fas fa-at" aria-hidden="true"/>
                                    justbrettt@gmail.com
                                </a>
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent>
                                 <a href="https://github.com/BrettSevy" rel="noopener" target="_blank">
                                    <i className="fa fab fa-github" aria-hidden="true" />
                                GitHub
                                </a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent>
                            <a href="https://linkedin.com/in/BrettSevy" rel="noopener" target="_blank">
                                    <i class="fa fab fa-linkedin" aria-hidden="true" />
                                LinkedIn
                                </a>
                                </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
};  

export default Contact;