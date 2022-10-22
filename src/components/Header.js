import React, { Component, Fragment } from 'react';
import './Header.css';
class Header extends Component {

    constructor(){
        super();
        this.state = {
            title:"React Application",
            keyword:"User Text Here"
        }
    }

    handleChange = (event) => {
        this.setState({keyword:event.target.value})
    }

    noChange = (event) => {
        this.setState(keyword)
    }

    render(){
        return(
            <Fragment>
                <header>
                    <div className = "logo" >{this.state.title}</div>
                    <input onChange = {this.handleChange}/>
                    <div style = {{fontSize:'25px',color:'white'}}> {{onChange ? 'handleChange' : 'noChange'}} </div>
                </header>
                <hr/>
            </Fragment>
        )
    }
}



export default Header;




// const Header = () => {
//     return(
//         <Fragment>
//             <center>
//                 <h1>React App</h1>
//             </center>
//             <hr/>
//         </Fragment>
//     )
// }