import React, { useEffect, useState } from "react";


import videoBkg from './assets/videoBkg.mov'


function App() {


  useEffect(()=>{
    // setLoop
  },[])


  // selected winners arrays
  const [winner, setWinner] = useState([])

  
  // array to hold selected numbers in function 
  var winnersArray = []

  // temporary array to filter values in initial array
  var tempArray=[]

  

  var grandArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
    61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
    81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
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

      var res = []
    
      for(var count = 0;count <= 99; count++){

        // random number being chosen
        const result = grandArray[Math.floor(Math.random() * grandArray.length)]

        res[count] = result

        // push result to final array
        // winnersArray.push(result)

        // temporarily filter th
        tempArray = grandArray.filter(x => x !== result)

        grandArray = tempArray

        console.log(tempArray, winnersArray)

        return res

      }

    //   setWinner(winnersArray)

      
  }

  const getWinneer= ()=>{
    document.getElementsByClassName('btn-winner')[0].innerHTML = ''
  }





  return (
    <div className=" bg-red-100" style={{height:'100vh'}}>
      
      <video src={videoBkg} loop={true} autoPlay muted className=" h-full w-full object-cover" />


      <div className="absolute top-0 place-items-center place-content-center text-center items-center w-full p-20 " style={{backgroundColor:'rgba(0,0,0,0.2)'}}>


        <div className="grid grid-cols-10 grid-rows-10 h-auto  ">
         
          {winner.map((x)=>{
            return(
              // <div key={x} className="p-5 text-center border border-green-400 bg-gradient-to-tr from-green-600 to-red-400 text-lg font-extrabold text-white ">{x}</div>
              <div key={x} className="p-5 text-center text-3xl font-extrabold text-green-200 ">{x}</div>

            )
          })}
        </div>

      </div>

      <div className="h-auto flex place-items-center w-full justify-center bottom-0 absolute">
        {/* <button onClick={
            pickRandom}
                  className="bg-red-500 h-fit p-5 rounded text-white font-bold animate-bounce">Merry Christmas</button> */}

          <button onClick={()=>{ 

                setInterval(()=>{
                  setWinner([])
                  pickRandom()
                },5000)

                }} 
                className="bg-red-500 h-fit p-5 rounded text-white font-bold animate-bounce">Start</button>
      </div>
    </div>
  );
}

export default App;
