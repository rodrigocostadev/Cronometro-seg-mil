import React from "react";


function ListLaps (props){

    let numberLap = 1
    let indice = 0
    let indiceClass = 0

    let maiorValor = Math.max.apply(null, props.secondsResult );
    let indiceMaiorValor = props.secondsResult.indexOf(maiorValor)   

    let menorValor = Math.min.apply(null, props.secondsResult );
    let indiceMenorValor = props.secondsResult.indexOf(menorValor)

    // console.log(props.msResult)
    // console.log(maiorValor)
    // console.log(indiceMaiorValor + " Maior")
    // console.log(indiceMenorValor + " Menor")

    // Esse return pega o maior valor e deixa na cor vermelha, e o menor valor deixa na cor verde
    return(
        <ul>

            {props.countLapF2.map( item =>
                <li key={item.id} id= {indice++} className={ (indiceClass = indice - 1) === indiceMaiorValor? "red" : indiceClass === indiceMenorValor? "green" : "darkred" } >
                    Day{numberLap++} ---  {item} <button  className="delete">delete</button>
                </li>
                )
            }
            
        </ul>

    )
}


// Esse return foi feito primeiramente, só adiciona os itens da lista sem mostrar o maior e o menor valor
// return(
//     <ul>
//         {/* {props.lap.map( item => */}
//         {props.countLapF2.map( (item, index) =>
//             <li key={item.id} id= {index ++} className={"darkred"}>
//                 Lap{numberLap++}  {item}
//             </li>)
//         }
        
//     </ul>
//     )
// }

export default ListLaps