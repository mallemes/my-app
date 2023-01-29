const defValue = {
    messagesDate: [
        {id: 1, message: "erjadennefenfdcn"},
        {id: 2, message: "mamfkmkfmsddc rdan"},
        {id: 3, message: "tkdmkmffkeln sksmc lkealgat"},
        {id: 4, message: "c,s,cksf[fefn mpkfnfpe fhfp; f fjnpfbfb ifbfpiwefb fewpdberik"},
        {id: 5, message: "s fcp122"}
    ],
    dialogs: [
        {id: 1, name: "erjan"},
        {id: 2, name: "mardan"},
        {id: 3, name: "talgat"},
        {id: 4, name: "berik"},
        {id: 5, name: "serik"},
    ],
    newMessageBody: '',
    user: null,
}

const profileReducer = (state = defValue, action) => {
    if (action.type === "NEW-MESSAGE-UPDATE") {
        return {...state,
        newMessageBody: action.body
        };
    } else if (action.type === "SEND-MESSAGE") {
        // const copyState2 = {...state}
        let newMessageText = state.newMessageBody;
        const newMessageObj = {id: 14, message: newMessageText};
        // copyState2.messagesDate = [...state.messagesDate, newMessageObj];
        // copyState2.newMessageBody = '';
        return {
            ...state,
            messagesDate: [...state.messagesDate, newMessageObj],
            newMessageBody: ''
        };

    }

    return state;
}
export default profileReducer;