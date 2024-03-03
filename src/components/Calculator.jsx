import { useState } from 'react'; 
import '../styles/Calculator.css';

function Calculator() {
    let [height, setHeight] = useState(170);
    let [weight, setWeight] = useState(70);
    let [age, setAge] = useState(20);
    let [bmi, setBmi] = useState(0);

    function calculateBmi() {
        return weight / ((height/100) ** 2);
    }

    let status = "";

    

    if(bmi.toFixed(2) < 18.5 && bmi.toFixed(2) > 0) {
        status = "Underweight";
    } else if (bmi.toFixed(2) > 18.5 && bmi.toFixed(2) < 24.9) {
        status = "Normal";
    } else if (bmi.toFixed(2) > 25.0 && bmi.toFixed(2) < 29.9) {
        status = "Overweight";
    } else if (bmi.toFixed(2) >= 30.0) {
        status = "Obese";
    } else if (bmi.toFixed(2) == 0.00) {
        status = "";
    }
    
    

    return (
        <>
            <div className="cards">
                <div className="card">
                    <p>Height</p>
                    <p className="height">{ height }</p>
                    <div className="btn-container">
                        <button onClick={() => {setHeight(height - 1)}}>-</button>
                        <button onClick={() => {setHeight(height + 1)}}>+</button>
                    </div>
                </div>
                <div className="card">
                    <p>Weight</p>
                    <p className="weight">{ weight }</p>
                    <div className="btn-container">
                        <button onClick={() => {setWeight(weight - 1)}}>-</button>
                        <button onClick={() => {setWeight(weight + 1)}}>+</button>
                    </div>
                </div>
                <div className="card">
                    <p>Age</p>
                    <p className="age">{ age }</p>
                    <div className="btn-container">
                        <button onClick={() => {setAge(age - 1)}}>-</button>
                        <button onClick={() => {setAge(age + 1)}}>+</button>
                    </div>
                </div>
            </div>

            <div className="result">
                <button className='submit-btn' onClick={() => setBmi(calculateBmi())}>Calculate</button>
                <p className="result">BMI: { bmi.toFixed(2) }</p>
                <p className='result'>{ status }</p>
            </div>
        </>
    )
}

export default Calculator;
