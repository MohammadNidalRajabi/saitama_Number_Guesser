import { useState } from 'react';
import './game.css'
const GameBody = () => {

    const img = [
        "http://pm1.narvii.com/6583/cfc797df7c69ecb78ce141a7dfbad0b5a04413e1_00.jpg",
        "https://pm1.narvii.com/7425/7c25c112b0bc45cd0d0d2503a879fa3d0c4f61a7r1-640-365v2_hq.jpg",
        "https://pa1.narvii.com/6747/1b1fb0e581c1573de26221986a10b3ae4e1d6cab_hq.gif",


    ];
    const reload = () => {
        console.log("cliked");
        setState("none");
        setQuestion([
            getRand(99, 0),
            getRand(99, 0),
            getRand(99, 0),

        ]);
        setAns(getRand(3, 0));


    };
    function getRand(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    const [correct, setCorrect] = useState(0);
    const [state, setState] = useState("none");
    const [wrong, setWrong] = useState(0);
    const [question, setQuestion] = useState([
        getRand(99, 0),
        getRand(99, 0),
        getRand(99, 0),
    ]);
    const [Ans, setAns] = useState(
        getRand(3, 0),
    );
    const Cllik = (val) => {

        if (val === Ans) {
            setCorrect(correct + 1);
            setState(1);
        }
        else {
            setWrong(wrong + 1);
            setState(0);
        }
    };


    return (

        <div className='container' >
            <div className='top'>
                <h2>Correct:{correct} </h2>
                {
                    state == 1 ?
                        <button className='Button' onClick={reload}><span class='reload'> Try Again&#x21bb;</span></button>
                        :
                        state == 0 ?
                            <button className='Button' onClick={reload}><span class='reload'>Try Again&#x21bb;</span></button>
                            : null
                }


                <h2>Wrong:{wrong} </h2>
            </div>

            {

                state == "none" ? (
                    <img
                        src={img[1]}

                        height={500} alt="" />


                ) :
                    state == "1" ? (
                        <img
                            src={img[0]}

                            height={500} alt="" />


                    ) :
                        state == "0" ? (
                            <img
                                src={img[2]}

                                height={500} alt="" />


                        )
                            : null





            }




            <h3>I have a number in my mind, What it is?!</h3>
            <div className={state === "none" ? 'Button' : 'Button2'}>
                <button onClick={state === "none" ? () => Cllik(0) : null}>{question[0]}</button>
                <button onClick={state === "none" ? () => Cllik(1) : null}>{question[1]}</button>
                <button onClick={state === "none" ? () => Cllik(2) : null}>{question[2]}</button>
            </div>
        </div>



    );

}
export default GameBody;
