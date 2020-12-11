// React
import React from "react";

//Icons

//Styles
import "./NavBar.css"

class NavBar extends React.Component{
    render(){
        const{
            //Props
        }=this.props
    
        return(
            <section className="NavBar">
                <nav>
                    <ul className="NavBar__items">
                        <li><a href=""className="NavBar__item">Películas</a></li>
                        <li><a href=""className="NavBar__item">Series</a></li>
                        <li><a href=""className="NavBar__item">Estrenos</a></li>
                    </ul>
                </nav>
                <div className="icons">
                    <i className="icon-heart button"></i>
                    <i className="icon-profile button"></i>
                    <i className="icon-exit button"></i>
                </div>
            </section>
        )
    }
}

export default NavBar;