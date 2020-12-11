import React from 'react';

// Components
import NavBar from "../components/NavBar/NavBar.js";
import MenuBar from "../components/MenuBar/MenuBar.js";
import MovieCard from "../components/MovieCard/MovieCard.js";
import SceneCards from "../components/ScenesCard/SceneCard.js";
// Styles
import "./MovieDetail.css"

class MovieDetail extends React.Component{
    render(){
        const {
            //props
        } = this.props
        return(
            <body>
                <section className="MovieDetail__body">
                    <NavBar />
                    <MenuBar />
                    <div className="MovieDetail__movieCard">
                        <MovieCard production="fox-century" 
                        release="2019" 
                        sinopsis="Jake Sully es un ex-marine confinado en una silla de ruedas que, 
                        a pesar de su cuerpo tullido, todavía es un guerrero de corazón. 
                        Jake ha sido reclutado para viajar a Pandora, donde las corporaciones 
                        están extrayendo un mineral extraño que es la clave para resolver los 
                        problemas de la crisis energética de la Tierra. Al ser tóxica la atmósfera de Pandora, 
                        ellos han creado el programa Avatar, en el cual los humanos “conductores” tienen sus conciencias unidas a un avatar, 
                        un cuerpo biológico controlado de forma remota que puede sobrevivir en el aire letal." />
                    </div>
                    <div className="MovieDetail__sceneCards">
                        <SceneCards 
                            scene1="https://wipy.tv/wp-content/uploads/2020/07/james-cameron-hablo-de-los-retrasos-de-avatar.jpg"
                            scene2="https://img.europapress.es/fotoweb/fotonoticia_20190220125929_1024.jpg"
                            scene3="https://assets.tonica.la/__export/1576694733564/sites/debate/img/2019/12/18/avatar_1_1.jpg_759710130.jpg"
                        />  
                    </div>                
                </section>
            </body>
        )
    }
}

export default MovieDetail;
