import './App.css';

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
import {compose} from "redux";
import {withRouter} from "./hoc/withAuthRedirect";
import {setInitialized} from "./redux/AppReducer";
import loading from "./assets/images/loading.gif";


class App extends React.Component{
    componentDidMount() {
        this.props.setInitialized()
    }
    render() {
        if (!this.props.initialized){
            return <div><img src={loading} alt="..." style={{height:"200px"}}/></div>
        }
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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// export default connect(null, {setInitialized})(withRouter(App));
export default compose(withRouter, connect(mapStateToProps,{setInitialized}))(App)