import './App.css';
import MyNav from "./components/MyNav/MyNav";
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/withAuthRedirect";
import {setInitialized} from "./redux/AppReducer";
import loading from "./assets/images/loading.gif";
import DiologsComponent from "./components/Diologs/DialogsComponent";
import MyContentComp from "./components/Content/MyContentComp";
import HeaderComp from "./components/Header/HeaderComp";
import Login from "./components/Login/Login";
// const MyContentComp = React.lazy(() => {
//     import('./components/Content/MyContentComp.jsx')
// });
// const DiologsComponent = React.lazy(()=> import('./components/Content/MyContentComp'))

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.jsx'));
// const HeaderComp = React.lazy(()=> {
//     import('./components/Header/HeaderComp.jsx')
// })
// const Login = React.lazy(() => {
//     import('./components/Login/Login.jsx')
// })


class App extends React.Component {
    componentDidMount() {
        this.props.setInitialized()
    }

    render() {
        if (!this.props.initialized) {
            return <div><img src={loading} alt="..." style={{height: "200px"}}/></div>
        }
        return (
            <Suspense fallback={<div>dsssssssssssssssssssssd</div>}>
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
            </Suspense>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// export default connect(null, {setInitialized})(withRouter(App));
export default compose(withRouter, connect(mapStateToProps, {setInitialized}))(App)