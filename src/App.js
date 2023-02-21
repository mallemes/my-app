import './App.css';
import Header from "./components/Header/Header";
import MyNav from "./components/MyNav/MyNav";

import {Route, Routes} from "react-router-dom";
import MyContentComp from "./components/Content/MyContentComp";
import DiologsComponent from "./components/Diologs/DialogsComponent";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderComp from "./components/Header/HeaderComp";
import Login from "./components/Login/Login";
import {auth} from "./redux/AuthReducer";
import {connect} from "react-redux";


class App extends React.Component{
    componentDidMount() {
        this.props.auth()
    }


    render() {
        return (

            <div className="App">
                <HeaderComp/>
                <MyNav/>
                <div className="App-wr-content">
                    <Routes>
                        <Route path='/dialogs' element={<DiologsComponent/>}/>
                        <Route path='/profile' element={<MyContentComp/>}/>
                        <Route path='/profile/:number' element={<MyContentComp/>}/>
                        <Route path='/dialogs/:number' element={<DiologsComponent/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
            // </BrowserRouter>
        );
    }
}


export default connect(null, {auth})(App);
