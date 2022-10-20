import { useAppContext } from "./calculatorState";

export default function Button({ type, value }) {
    const calculator = useAppContext();

    function hanldleClick() {
        switch (type) {
            case "number":
                calculator.addNumber(parseInt(value));
                break;

            case "operator":
                calculator.addOperation(value)
                break;

            case "action":
                calculator.executeAction(value)
                break;

            default:
        }
    }

    return <Button className="calculatorButton" onClick={hanldleClick} >{value}</Button>
}