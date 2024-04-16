
const root= ReactDOM.createRoot(document.getElementById('app')); 

function Timer()
{
    const [time,setTime]=React.useState(0);
    const [timer,setTimer]=React.useState(0);
    const [radioValue, setRadioValue] = React.useState(1);
    // const [timer, setTimer] = React.useState({
    //     seconds: 0,
    //     minutes: 0,
    //     hours: 0
    // });

    // const handleTimer = () => {
    //     setTimer(prev => {
    //         let newSeconds = prev.seconds - 1;
    //         let newMinutes = prev.minutes;
    //         let newHours = prev.hours;
    
    //         if (newSeconds < 0) {
    //             newSeconds = 59;
    //             newMinutes -= 1;
    //         }
    
    //         if (newMinutes < 0) {
    //             newMinutes = 59;
    //             newHours -= 1;
    //         }
    
    //         if (newHours < 0) {
    //             newHours = 0;
    //             newMinutes = 0;
    //             newSeconds = 0;
    //         }
    
    //         return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
    //     });
    // };
      
    const [timerSettings] = React.useState([
        {title: 'Cекунди', radioValue: 1, id: 'SecRadio'},
        {title: 'Хвилини', radioValue: 2, id: 'MinRadio'},
        {title: 'Години', radioValue: 3, id: 'HourRadio'},
    ])

    let idTime=0;
    
    React.useEffect(()=>{

        console.log("component start");

        const timeBtn=document.getElementById('timebtn');
        timeBtn.innerText = "Start";
        timeBtn.addEventListener("click",begin);

        const droptimebtn=document.getElementById('droptimebtn');
        droptimebtn.addEventListener("click",droptime);

        //RadioButtons
        const inputtimerbtn = document.getElementById('inputtimerbtn');
        if (radioValue === 1) {
            inputtimerbtn.placeholder = "Введіть секунди";
        } else if (radioValue === 2) {
            inputtimerbtn.placeholder = "Введіть хвилини";
        } else if (radioValue === 3) {
            inputtimerbtn.placeholder = "Введіть години";
        }

        // //Timer
        // const timerbtn=document.getElementById('timerbtn');
        // timerbtn.addEventListener("click",startTimerFunc);

        const stoptimerbtn=document.getElementById('stoptimerbtn');
        stoptimerbtn.addEventListener("click",stopTimerFunc);


        return () => {
           timeBtn.removeEventListener("click",begin);
           droptimebtn.removeEventListener("click",droptime);

        //    timerbtn.removeEventListener("click",startTimerFunc);
           stoptimerbtn.removeEventListener("click",stopTimerFunc);
        }
    },[radioValue])

    function begin()
    {
        const timeBtn=document.getElementById('timebtn');
        if(timeBtn.innerText==="Start")
        {
            timeBtn.innerText="Stop"
            idTime = setInterval(()=>tick(),1000);

        }else
        {
            timeBtn.innerText="Start"
            clearInterval(idTime);
            idTime=0;
        }
    }

    function droptime()
    {
        setTime(0); 
        clearInterval(idTime);
        idTime=0;

        const timeBtn=document.getElementById('timebtn');
        timeBtn.innerText="Start";
    }

    function tick()
    {
        console.log("tick");
        setTime((time)=>time+1);
    }

    //Timer
    let newTimer=0;
    let newIdTimer=0;

    function reverseTick()
    {
       setTimer((prev) => prev - 1);
    }

    function saveInput(e)
    {
        const value = parseInt(e.target.value);
        if(value<0)
        {
            alert("Число менше 0")
        }else
        {
            setTimer(value);
            console.log(` saveInput newTimer: ${value}`);
        }
    }

    React.useEffect(() => {
        if(timer <= 0) {
            setTimer(0);
            clearInterval(newIdTimer);
            newIdTimer=0;
            return;
        }
    }, [timer])

    function startTimerFunc()
    {
        const secbtn=document.getElementById('SecRadio');
        const minbtn=document.getElementById('MinRadio');
        const hourbtn=document.getElementById('HourRadio');

        if (secbtn.checked) {
            newIdTimer = setInterval(()=>reverseTick(),1000);
        }
        if (minbtn.checked) {
            
        }
        if (hourbtn.checked) {
           
        }
        
    }

    function stopTimerFunc()
    {
        setTimer(0); 
        console.log(timer);
        clearInterval(newIdTimer);
        newIdTimer=0;
    }

    return(
        <panel>
            <div style={{ textAlign: 'center', border: '1px solid black', padding: '20px', borderRadius: '10px', width: '200px', margin: '0 auto' }}>
                <h2>Секундомір: {time}</h2>
                <button id="timebtn" style={{ marginRight: '10px' }}>Start/Stop</button>
                <button id="droptimebtn">Drop</button>
            </div>
            <br></br>
            <div style={{ textAlign: 'center', border: '1px solid black', padding: '20px', borderRadius: '10px', width: '250px', margin: '0 auto' }}>
                <br></br>
                <br></br>
                <br></br>
                <p>Таймер: </p>
                {/* <input type="radio" id="SecRadio" ref={secondsRef} name="option" value="1" checked={radioValue === '1'} onChange={(e) => setRadioValue(e.target.value)}></input>
                <label for="option1">Секунди</label>
                <input type="radio" id="MinRadio" name="option" value="2" checked={radioValue === '2'} onChange={(e) => setRadioValue(e.target.value)}></input>
                <label for="option2">Хвилини</label>
                <input type="radio" id="HourRadio" name="option" value="3" checked={radioValue === '3'} onChange={(e) => setRadioValue(e.target.value)}></input>
                <label for="option3">Години</label> */}
                {timerSettings.map((item) => {
                    return (
                        <>
                            <input 
                                type="radio" 
                                id={item.id} 
                                name="option" 
                                value={radioValue} 
                                checked={radioValue === item.radioValue} 
                                onChange={(e) => setRadioValue(item.radioValue)}>
                            </input>
                            <label for={item.id}>{item.title}</label>
                        </>
                    )
                })}
                <br></br><br></br>

                <input id="inputtimerbtn" onChange={saveInput} type="number" min={1}></input>
                <br></br><br></br>
                <button id="timerbtn" onClick={startTimerFunc}>Start</button>
                <button id="stoptimerbtn">Stop</button>

                <p>Залишок: {timer}</p>
            </div>
        </panel>
    )
}

root.render(<Timer/>);