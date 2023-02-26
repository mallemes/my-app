import React from 'react';
import DialogItem from "../DialoItem/DiologItem";
import Message from "../Messages/Message";
import Diologs from "./Diologs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {sendMessageCreator} from "../../redux/ProfileReducer";


class DialogComp extends React.Component{
    render() {return<Diologs {...this.props}/>}
}
const mapStateToProps = (state)=> ({
        messagesData: state.dialogsPage.messagesDate,
        dialogs: state.dialogsPage.dialogs,
})

// const DiologsComponent = withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(DialogComp));
export default compose(connect(mapStateToProps,{sendMessageCreator}),withAuthRedirect)(DialogComp);