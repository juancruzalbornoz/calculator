import CalculatorScreen from "./calculatorScreen";
import CalculatorState from "./calculatorState";

export default function Calculator(){
    return <CalculatorState>
        <div className="calculatorContainer">
            <CalculatorScreen />
            <div className="container">
                <button type="action" value="AC">AC</button> 
                <button type="operator" value="%">%</button>
                <button type="action" value="==">==</button>
                <button type="operator" value="/">/</button>
                <button type="number" value="7">7</button>
                <button type="number" value="8">8</button>
                <button type="number" value="9">9</button>
                <button type="operator" value="*">*</button>
                <button type="number" value="4">4</button>
                <button type="number" value="5">5</button>
                <button type="number" value="6">6</button>
                <button type="operator" value="-">-</button>
                <button type="number" value="1">1</button>
                <button type="number" value="2">2</button>
                <button type="number" value="3">3</button>
                <button type="operator" value="+">+</button>
                <button type="action" value="+/-">+/-</button>
                <button type="number" value="0">0</button>
                <button type="action" value=".">.</button>
                <button type="action" value="=">=</button>
            </div>
        </div>
    </CalculatorState>
}