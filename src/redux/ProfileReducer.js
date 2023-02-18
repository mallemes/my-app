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


}

const profileReducer = (state = defValue, action) => {
    if (action.type === "SEND-MESSAGE") {
        let newMessageText = action.message;
        const newMessageObj = {id: 14, message: newMessageText};
        return {
            ...state,
            messagesDate: [...state.messagesDate, newMessageObj],
        };

    }

    return state;
}
export const sendMessageCreator = (message) => ({type: "SEND-MESSAGE",message})

export default profileReducer;