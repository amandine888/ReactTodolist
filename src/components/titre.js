"use-strict";

import React from 'react';

// Utilisation d'une classe pour faire un composant, dans ce cas plus simple d'utiliser une fonction si pas de state. 

// class Titre extends React.Component {

//     render() {
//         return (
//             <div className = "titre">
//                 <h1>
//                     {this.state.titre}
//                 </h1>
//             </div>

//         );
//     }
// }

const Titre = props => <h1> {this.titre}</h1>

export default Titre;