import React from 'react';
import { Header, Navigation, Layout, Drawer, Content } from "react-mdl";
import Main from "./main";
import { Link } from "react-router-dom";
import "../App.css";
import Home from "./home/home"



function Navbar() {
    return (
        <div className="main" style={{ height: 'auto', position: 'auto' }}>
            <Layout style={{ background: 'url(http://wallpaperping.com/wp-content/uploads/2018/12/pexels-photo-691668.jpeg) center/cover' }}>
                <Header className="sign" transparent title="">
                    <Navigation>
                        
                        <Link to="/home">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Brett Sevy">
                    <Navigation>
                        
                        <Link to="/home">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                {/* <Home> */}
                    <div className="page-content" />
                {/* </Home> */}
                <Main />
            </Layout>
        </div>
    )
};

export default Navbar;

