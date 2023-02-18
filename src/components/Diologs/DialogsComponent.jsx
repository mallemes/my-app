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
const mapStateToProps = (state)=> {
    const newList = state.dialogsPage.messagesDate.map(el => <Message key={el.message} message={el.message} id={el.id}/>);
    const newDialogDate = state.dialogsPage.dialogs.map(names => <DialogItem key={names.name} name={names.name} id={names.id}/>);
    return{
        newList: newList,
        newDialogDate:newDialogDate,
    }
}

// const DiologsComponent = withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(DialogComp));
export default compose(connect(mapStateToProps,{sendMessageCreator}),withAuthRedirect)(DialogComp);