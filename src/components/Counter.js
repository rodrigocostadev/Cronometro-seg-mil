import React, { useEffect, useState } from "react";
import ListLaps from "./ListLaps";

function Counter (){

    // const [displayMiliSeconds, setDisplayMiliSeconds] = useState(0)
    // const [miliSeconds, setMIliSeconds] = useState(0)

    const [displaySeconds, setDisplaySeconds] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [displayMinutes, setDisplayMinutes] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const [displayHours, setDisplayHours] = useState(0)
    const [hours, setHours] = useState(0)

    // guarda o estado para verdadeiro ou falso o botão play/pause, para rodar função
    const [estatePlay, setEstatePlay] = useState(false)
    //  guarda o estado para mostrar no botão, alternando de play para pause 
    const [valueButton, setValueButton] = useState("Play")

    //pega o intervalo entre play/pause e play/reset "reset que roda a função pause"
    const [intervalo, setIntervalo] = useState()

    //calcula o intervalo de volta Lap
    const[miliSecondsLap, setMillisecondsLap] = useState(0)

    //calcula o intervalo de volta Lap
    const[secondsLap, setSecondsLap] = useState(0)

    const[lapF2, setLapF2] = useState([])

    // console.log(Date.parse)

    useEffect(() => {
        timerFunction()
    },[seconds])


    function timerFunction(){   
        
        // Mili Seconds
        // if (miliSeconds >= 10){
        //     setDisplayMiliSeconds("")
        // }else if(miliSeconds < 10){
        //     setDisplayMiliSeconds("0")
        // }

        // if (miliSeconds === 100){
        //     setDisplayMiliSeconds(0)
        //     setMIliSeconds(0)
        //     setSeconds((prevSeconds) => prevSeconds + 1)
        //     // setMIliSeconds((prevMinutes) => prevMinutes + 1  )
        //     setDisplaySeconds(0)     
        // }
        
        //Seconds
        if (seconds >= 10){
            setDisplaySeconds("")
        }else if(seconds < 10){
            setDisplaySeconds("0")
        }
        if (seconds === 60){
            setSeconds(0)
            setMinutes((prevMinutes) => prevMinutes + 1  )
            setDisplaySeconds(0)     
        }

        //Minutes
        if (minutes === 10){
            setDisplayMinutes("")
        }
        if (minutes === 60){
            setMinutes(0)
            setHours((prevHours) => prevHours + 1  )
            setDisplayMinutes(0)
        }    

        //Hours
        if (hours === 10){
            setDisplayHours("")
        }    
    }

    function increment(){
        setSeconds((prevSeconds) => prevSeconds + 1  )
        setSecondsLap((prevSeconds) => prevSeconds + 1)
        // setMIliSeconds((prevMiliSeconds) => prevMiliSeconds + 1  )
        // setMillisecondsLap((prevMiliSecondsLap) => prevMiliSecondsLap + 1  )
    }


    function play(){    
        
        let dateNow = new Date()
        let prevDate = Date.parse(dateNow)
        console.log(prevDate)

        // Elimina a execução em paralelo de outras funções contadoras, assim DEIXANDO DE ACELERAR O CONTADOR
        if(!intervalo){
            setIntervalo(setInterval(() => {
                increment()
                timerFunction()
            }, 1000))   
        }
    }

    function pause(){

        let dateNow = new Date()
        let nextDate = Date.parse(dateNow)
        console.log(nextDate)
        
        // Elimina a execução em paralelo de outras funções contadoras, assim DEIXANDO DE ACELERAR O CONTADOR
        if(intervalo){
            clearInterval(intervalo)
            setIntervalo()
        }
    }

    const ButtonPlayPause = () => {        
        
            if(estatePlay === false ){
                setEstatePlay(true)
                play()
                // console.log("play")
                setValueButton("Pause")
            }else if ( estatePlay === true){
                setEstatePlay(false)
                pause()
                // console.log("pause")
                setValueButton(" Play ")
            }
        
    }

    function reset(){
        pause()
        // setMIliSeconds(0)
        // setDisplayMiliSeconds(0)
        setEstatePlay(false)
        setValueButton(" Play ")
        setSeconds(0)
        setDisplaySeconds(0)
        setMinutes(0)
        setDisplayMinutes(0)
        setHours(0)
        setDisplayHours(0)
        // setIntervalo()
        timerFunction()
        // setLap([])
        setCountLapF2([])
        // setMillisecondsLap(0)
        setSecondsLap(0)
        setLapF2([])
        // setMsResult([])
        setSecondsResult([])
    }

     function testFunction(){
        let dateNow = new Date()
        console.log(dateNow)

        let hora = dateNow.getHours()
        let minutos = dateNow.getMinutes()
        let segundos = dateNow.getSeconds()

        let dia = dateNow.getDate()
        let mes = dateNow.getMonth()
        let ano = dateNow.getFullYear()

        // da a data de hoje em MS
        console.log(Date.parse(dateNow))

        console.log(hora + " horas " + minutos +  " minutos " + segundos + " segundos" )
        console.log( " dia " + dia + " mes " + (mes + 1 ) + " ano " + ano  )
     }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////// 2 TENTATIVA DE CALCULAR VOLTA COM MILISECONDSLAP /////////////////////////////////////////////////

    //Mostra o tempo de volta calculado
    const [countLapF2, setCountLapF2] =useState([])

    //Guarda o valor da volta em MS para calcular a maior e menor volta no arquivo listLap.js
    // const [ msResult, setMsResult] = useState([])
    const [ secondsResult, setSecondsResult] = useState([])

    // let NEWLAPF2 = miliSecondsLap 
    let NEWLAPF2 = secondsLap


    function lapFunction2(){        

        setLapF2([...lapF2,NEWLAPF2])
        // console.log(lapF2)

        //metodo pop pega a ultima string do array 
        let lastStringLapF2 = lapF2.pop()  

        if(lastStringLapF2 === undefined){
            lastStringLapF2 = 0
        }         

        // let finalMsResult = miliSecondsLap - lastStringLapF2 
        let finalSecondResult = secondsLap - lastStringLapF2       

        // console.log(lastStringLapF2)
        // console.log(miliSecondsLap)
        // console.log(lapF2)

        // tive que transformar numero "finalMsResult"( intervalo de volta, ou milisecondsLap )em string 
        // para pegar os 2 ultimos digitos com o metodo slice 
        // let miliSecondsF2 = String(finalMsResult).slice(-2)
        // let secondsF2 = Math.floor(finalMsResult / 100)
        // let minutesF2 = Math.floor(secondsF2 / 60)
        // let hoursF2 = Math.floor(minutesF2 / 60)
        // let secondsRest = secondsF2 % 60

        let secondsF2 = Math.floor(finalSecondResult)
        let minutesF2 = Math.floor(secondsF2 / 60)
        let hoursF2 = Math.floor(minutesF2 / 60)
        let secondsRest = secondsF2 % 60

        //variaveis responsaveis por ser 0 (0 que fica a frente) se o contador for menor do que 10
        // let DisplayMiliSecondsF2
        let DisplaySecondsF2
        let DisplayMinutesF2
        let DisplayHoursF2

        //Miliseconds
        // if(miliSecondsF2 === 0){
        //     DisplayMiliSecondsF2 = 0
        // }else{ DisplayMiliSecondsF2 = ""}

        //Seconds
        if(secondsRest < 10){
            DisplaySecondsF2 = 0
        }else{ DisplaySecondsF2 = ""}

        //Minutes
        if(minutesF2 < 10){
            DisplayMinutesF2 = 0
        }else{ DisplayMinutesF2 = ""}
        
            // laço de repetição para evitar que apareça mais de 60 nos minutos no contador de voltas, 
            // ex: apareceria 2 horas e 67 minutos, com o laço aparece 2 horas e 7 minutos
        for( let i = 0; i < 60 ; i++){
            if(minutesF2 >= 60){
                DisplayMinutesF2 = 0
                minutesF2 = (minutesF2 - 60)
                // console.log("laço")
            }
        }

        //Hours
        if(hoursF2 < 10){
            DisplayHoursF2 = 0
        }else{ DisplayHoursF2 = ""}

        let finalResult = "" + DisplayHoursF2 + hoursF2 + ":" + DisplayMinutesF2 + minutesF2 + ":" + DisplaySecondsF2 + secondsRest 
        // + "," + DisplayMiliSecondsF2  + miliSecondsF2

        //Guarda o valor da volta em MS para calcular a maior e menor volta no arquivo listLap.js
        // setMsResult([...msResult, finalMsResult])
        setSecondsResult([...secondsResult, finalSecondResult])
        // console.log(msResult)
        
        // setCountLapF2([...countLapF2, finalMsResult]) 
        setCountLapF2([...countLapF2, finalResult]) 

        // console.log(countLapF2)
        // console.log(finalMsResult)
    }
    

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return(
        <div className="display" >
            <h1>{displayHours}{hours} : {displayMinutes}{minutes} : {displaySeconds}{seconds} 
            {/* ,{displayMiliSeconds}{miliSeconds} */}
            </h1>
            <div className="container">
                <button onClick={testFunction}> Teste </button>
                <button onClick={ButtonPlayPause} >{valueButton}</button>
                {/* <button onClick={play}>Play</button> */}
                {/* <button onClick={pause} >Pause</button> */}
                {/* <BotaoPlayPause onClick={alternarEstado}>{estado ==='play' ? 'playT' : 'pauseT'}</BotaoPlayPause> */}
                <button onClick={lapFunction2} > Lap </button>
                {/* <button onClick={playPause} >Play</button> */}
                <button onClick={reset} >Reset</button>            
                {/* <button onClick={lapFunction} > Lap </button> */}
                {/* <p>{lap}</p> */}
                {/* <ListLaps lap = {lap}  ></ListLaps> */}
                {/* <ListLaps countLap = {countLap}  ></ListLaps> */}
            </div>            
            {/* <ListLaps countLapF2 = {countLapF2} msResult = {msResult} ></ListLaps> */}
            <ListLaps countLapF2 = {countLapF2} secondsResult = {secondsResult} ></ListLaps>
            <div className="credits" >
                <p>Criado e Desenvolvido por <a target="blank" href="https://linktr.ee/rodrigocostadev">Rodrigo Costa</a></p>
            </div>
        </div>
    )
    
}

export default Counter

