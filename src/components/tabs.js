// import React, { Component } from "react";
// import Home from "./home/home";
// import AboutMe from "./aboutme/aboutme";
// import Portfolio from "./portfoio/portfolio"
// import Contact from "./contact/contact"
// import { Tabs, Tab, Grid, Cell } from "react-mdl";


// class Bannanas extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { activeTab: 3 };
//     }

//             toggleCatagories() {
//                 if (this.state.activeTab === 0) {
//                     return (
//                         <div><h1><Home></Home></h1></div>
//                     )
//                 } else if (this.state.activeTab === 1) {
//                     return (
//                         <div><h1><AboutMe></AboutMe></h1></div>
//                     )
//                 } else if (this.state.activeTab === 2) {
//                     return (
//                         <div><h1><Portfolio></Portfolio></h1></div>
//                     )
//                 }
//             };

//     render() {
//         return (
//             <div className="tabs">
//                 <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
//                     <Tab>Home</Tab>
//                     <Tab>Lannisters</Tab>
//                     <Tab>Targaryens</Tab>
//                 </Tabs>
//                 <Grid>
//                     <Cell col={12}>
//                         <div className="content">{this.toggleCatagories()}</div>
//                     </Cell>
//                 </Grid>
//             </div>    
//         );
//     }
// };



// export default Bannanas;