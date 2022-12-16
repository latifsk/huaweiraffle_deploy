import React, { useState } from "react";


import LuckydrawBg from './assets/luckydrawBg.mov'
import Confetti from './assets/conf.gif'
import Fireworks from './assets/fireworks.gif' 
// import VideoBkg from './assets/videoBkg.mov'


function App() {


  
  
  // selected winners arrays
  const [winner, setWinner] = useState([])
  
  // array to hold selected numbers in function 
  var winnersArray = []
  
  // temporary array to filter values in initial array
  var tempArray=[]

  // counter array
  const [counter, setCounter]= useState(4)

  //start button and again buttton
  // const [start, setStart] = useState(true)
  
  
  
  var grandArray = ['001','002','003','004','005','006','007','008','009','010','011','012','013','014','015','016','017','018','019','020',
    '021','022','023','024','025','026','027','028','029','030','031','032','033','034','035','036','037','038','039','040',
    '041','042','043','044','045','046','047','048','049','050','051','052','053','054','055','056','057','058','059','060',
    '061','062','063','064','065','066','067','068','069','070','710','720','073','074','075','076','077','078','079','080',
    '081','082','083','084','085','086','087','088','089','090','091','092','093','094','950','096','097','098','099',100,
    101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,
    121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,
    141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,
    161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,
    181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,
    201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,
    221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,
    241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,
    261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,
    281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,
    301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,
    321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,
    341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,
    361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,
    381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400]


    
    const pickRandom = () => {
      for(var count = 0;count <= 14; count++){
        
        var checkData = []
        checkData = JSON.parse(localStorage.getItem('save'))


        if(checkData === null ){

          // random number being chosen
          const result = grandArray[Math.floor(Math.random() * grandArray.length)]
          
  
          // push result to final array
          winnersArray.push(result)
  
          // temporarily filter the main array to remove chosen numbers
          tempArray = grandArray.filter(x => x !== result)
          
          
          grandArray = tempArray
  
          localStorage.setItem('save',JSON.stringify(grandArray))
        
          
        }
        else{
          // get current array from local storage
          var mainData =[]
          mainData = JSON.parse(localStorage.getItem('save'))

          console.log(mainData)

          // // random number being chosen
          const result = mainData[Math.floor(Math.random() * mainData.length)]
          

          // // push result to final array
          winnersArray.push(result)

          // // temporarily filter the main array to remove chosen numbers
          tempArray = mainData.filter(x => x !== result)

          // save filtered array to local storage for reference at next stage
          localStorage.setItem('save',JSON.stringify(tempArray))
          
          console.log(tempArray)

          console.log(localStorage.getItem('save'))         

        }
      }

      setWinner(winnersArray)
      // localStorage.removeItem('save')
  }


  return (
    <div id='parent' className="parent bg-white w-full" style={{height:'100vh'}}>

    {/* main background */}
      <img alt="fireworks" src={Fireworks} loop autoPlay muted className=" h-full w-full absolute top-0  object-cover" />



      {/* confetti */}
      <img id='confetti' src={Confetti} alt='confetti' className=" h-full w-full object-cover absolute top-0" />

    {/* grid container overlay */}
      <div className="absolute flex flex-col px-20 top-0 place-items-center place-content-center text-center h-full w-full " style={{backgroundColor:'rgba(0,0,0,0.4)'}}>

        <div className="text-white py-10 top-28  absolute  text-8xl italic animate-bounce">
          Lucky Winners!!!
        </div>

        <div id="view" className="grid grid-cols-5 grid-rows-3 gap-5 lg:gap-16 h-auto w-full  ">
          {winner.map((x)=>{
            return(
              // <div key={x} className="p-5 text-center border border-green-400 bg-gradient-to-tr from-green-600 to-red-400 text-lg font-extrabold text-white ">{x}</div>
              <div key={x} className="text-center text-2xl lg:text-4xl  font-extrabold text-white w-auto h-auto ">{x}</div>
              )
            })}

        </div>
            
        <button onClick={()=>{ document.location.reload(); console.log('huuv')  }} className= "bg-red-500 h-fit p-5 rounded text-white font-bold absolute  bottom-10 uppercase animate-bounce">Again</button>

      </div>

      

      {/* show intro video for n seconds and remove */}
      <video id='frontV' src={LuckydrawBg} loop={true} autoPlay muted className=" h-full w-full object-cover absolute top-0" />
     


      <div className="h-fit flex place-items-center w-full justify-center bottom-10 absolute">

        <div className={counter <4 && counter >= 1 ? 'text-red-700 font-black text-9xl h-fit animate-ping bottom-20 my-14' : 'hidden'}>
          {counter}
        </div>

      {/* {start === true  && */}
        
        <button id='start' onClick={()=>{ 

          // setStart(false)

            // setStart(false)
            const startButton = document.getElementById('start')
            startButton.remove()
          
            const interval = setInterval(()=>{
              setCounter(prev => prev - 1) 
            },1000)

            setTimeout(()=>{
              clearInterval(interval)
            },5000)
          
              //remove video n seconds after click
                setTimeout(()=>{
                  const element = document.getElementById('frontV')
                  
                    element.remove()
                    
                    // change button
                    // setStart(prev => !prev)

                  }, 4000)
              
                pickRandom()


                //remove confetti after n seconds
                setTimeout(()=>{
                  const element = document.getElementById('confetti')
                  
                    element.remove()
                  }, 7000)
              
                // console.log('huuv')



                }} 
                
                className= "bg-green-500 h-fit p-5 rounded text-center place-content-center text-white font-bold lg:p-10 uppercase animate-spin">Start</button>

                {/* // className= {start === true ? "bg-green-500 h-fit p-5 rounded text-center place-content-center text-white font-bold lg:p-10 uppercase animate-spin" : 'hidden'}>Start</button> */}
      
      {/* } */}


    </div> 
  </div>
  );
}

export default App;
