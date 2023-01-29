import './App.css';
import Header from "./components/Header/Header";
import MyNav from "./components/MyNav/MyNav";

import {Route, Routes} from "react-router-dom";
import MyContentComp from "./components/Content/MyContentComp";
import DiologsComponent from "./components/Diologs/DialogsComponent";

import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    // debugger;
    return (
        // <BrowserRouter>
        <div className="App">
            <Header/>
            <MyNav/>
            <div className="App-wr-content">
                <Routes>
                    <Route path='/dialogs' element={<DiologsComponent/>}/>
                    <Route path='/profile' element={<MyContentComp/>}/>
                    <Route path='/profile/:number' element={<MyContentComp/>}/>
                    <Route path='/dialogs/:number' element={<DiologsComponent/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
        // </BrowserRouter>
    );
}


export default App;
