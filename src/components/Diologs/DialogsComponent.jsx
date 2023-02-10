import React from 'react';
import DialogItem from "../DialoItem/DiologItem";
import Message from "../Messages/Message";
import {sendMessageCreator, updNewMessageBodyCreator} from "../../redux/state";
import Diologs from "./Diologs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class DialogComp extends React.Component{
    render() {return<Diologs {...this.props}/>}
}
const mapStateToProps = (state)=> {
    const newList = state.dialogsPage.messagesDate.map(el => <Message key={el.message} message={el.message} id={el.id}/>);
    const newDialogDate = state.dialogsPage.dialogs.map(names => <DialogItem key={names.name} name={names.name} id={names.id}/>);
    return{
        newMessBody: state.dialogsPage.newMessageBody,
        newList: newList,
        newDialogDate:newDialogDate,
    }
}
const mapDispatchToProps = (dispatch)=> {
    return{
        changeValue: (event) =>{dispatch(updNewMessageBodyCreator(event));},
        onSendMessage: () =>{dispatch(sendMessageCreator());},
    }
}

const DiologsComponent = withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(DialogComp));
export default DiologsComponent;