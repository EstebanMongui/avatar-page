import React from "react";

//Icons

//Styles
import "./MenuBar.css"

class MenuBar extends React.Component{
    render(){
        const{
            //Props
        }=this.props
        return(
            <section className="MenuBar">
                <nav>
                    <ul className="MenuBar__items">
                        <li><a href="" className="MenuBar__item">Inicio</a></li>
                        <li><a href="" className="MenuBar__item">Categorías</a></li>
                        <li><a href="" className="MenuBar__item">Productoras</a></li>
                        <li><a href="" className="MenuBar__item">Plataformas</a></li>
                    </ul>
                </nav>
                <form className="MenuBar__search" action="">
                    <input type="text" placeholder="Búscar"/>
                    <i className="icon-search"></i>
                </form>
            </section>
        )
    }
}

export default MenuBar;