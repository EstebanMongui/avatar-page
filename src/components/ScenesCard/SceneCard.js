import React from "react";

//Icons

//Styles
import "./SceneCard.css"

class SceneCards extends React.Component{
    render(){
        const{
            scene1,
            scene2,
            scene3
        }=this.props
        return(
            <section className="SceneCards">
                <figure className="SceneCards__image">
                    <img src={scene1} alt="Escenas avatar"/>
                </figure>
                <figure className="SceneCards__image">
                    <img src={scene2} alt="Escenas avatar"/>
                </figure>
                <figure className="SceneCards__image">
                    <img src={scene3} alt="Escenas avatar"/>
                </figure>            
            </section>
        )
    }
}

export default SceneCards;