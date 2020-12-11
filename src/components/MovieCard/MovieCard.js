import React from "react";

//Icons

//Styles
import "./MovieCard.css"

class MovieCard extends React.Component{
    render(){
        const{
            production,
            release,
            sinopsis,
        }=this.props
        return(
            <section className="MovieCard">
                <div className="MovieCard__Figures">
                    <figure id="logo">
                        <img src="https://cutt.ly/5hUOYUX" alt="logotipo-avatar"/>
                    </figure>
                    <figure id="avatar">
                        <img src="https://cutt.ly/AhUOEgy" alt="personaje-avatar"/>
                    </figure>
                </div>
                <div className="MovieCard__description">
                    <div className="MovieCard__details">
                        <h3>Producción: <span>{production}</span> </h3>
                        <h3>Estreno: <span>{release}</span> </h3>
                    </div>
                    <div className="MovieCard__sinopsis">
                        <h3>{sinopsis}</h3>
                    </div>
                    <div className="MovieCard__button">
                        <i className="icon-play MovieCard__buttonPlay"></i>
                        <h4>Ver trailer</h4>
                    </div>
                </div>
            </section>
        )
    }
}

export default MovieCard;