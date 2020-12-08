"use-strict";

import React from 'react';

// CSS : 

import "../css/titleStyle.css"

// Utilisation d'une classe pour faire un composant, dans ce cas plus simple d'utiliser une fonction si pas de state. 

// class Titre extends React.Component {

//     render() {
//         return (
//             <div className = "titre">
//                 <h1>
//                     {this.props.Titre}
//                 </h1>
//             </div>
//         );
//     }
// }

const Title = props => <div className="title-section"><h1>{props.Title}</h1></div>

export default Title;