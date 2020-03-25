import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList, Grid } from "react-mdl";
import "./contact/contact.css"




class Foot extends Component {
    render() {
        return (
            <Footer className="footer sign" size="mini">
                <Grid>
                    <FooterSection>
                        
                        <span>

                        <a href="https://linkedin.com/in/BrettSevy" rel="noopener" target="_blank">
                            <i class="fa fab fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href="https://github.com/BrettSevy" rel="noopener" target="_blank">
                            <i className="fa fab fa-github" aria-hidden="true" />
                        </a>

                        </span>
                    </FooterSection>
                </Grid>
            </Footer>
        )
    }
};

export default Foot;