import './App.css';
import Employess from "./components/Employees/Employees.js";
// import EmployessBirthday from "./components/EmployeesBirthday/EmployeesBirthday.js";

function App() {
    return (
        <div>
            <div className="App">
                <div className='Employess'>
                    <p>Employess</p>
                    <Employess/>
                </div>
                <div className='EmployessBirthday'>
                    <p>EmployessBirthday</p>
                </div>
            </div>
        </div>
    );
}

export default App;
