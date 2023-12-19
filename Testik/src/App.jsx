import './App.css'
import {Leva} from "./Leva.jsx"
import {Prava} from "./Prava.jsx"


function App() {

    return (
        <>
            <div className={"zaklad"}>
                <div className={"left"}>
                    <Leva/>
                </div>
                <div className={"right"}>
                    <Prava/>
                </div>

            </div>

        </>
    )
}

export default App