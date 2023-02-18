import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "offd vfnvn vkvvp"},
                {id: 2, text: "f dffv eff vfvfdd"},
                {id: 3, text: "12 algaaaaaaaaaaaaaaaaaa"},
                {id: 4, text: "offd vfnvn vkvfdvf vffdvvvp"},
                {id: 5, text: "offd vfnvnr43efgrcvegr  reeegr vkvvp"},
                {id: 6, text: "offbgbbrgfddfd vfnvn vkvvp"},
            ],
            newText: ' ',
        }
        ,
        dialogPage: {
            messagesDate: [
                {id: 1, message: "erjadennefenfdcn"},
                {id: 2, message: "mamfkmkfmsddc rdan"},
                {id: 3, message: "tkdmkmffkeln sksmc lkealgat"},
                {id: 4, message: "c,s,cksf[fefn mpkfnfpe fhfp; f fjnpfbfb ifbfpiwefb fewpdberik"},
                {id: 5, message: "s fcpenpef p;mcpofd nfns nfpn mdklnf  pfp nfpnf nvnldfnk erik"}
            ],
            dialogs: [
                {id: 1, name: "erjan"},
                {id: 2, name: "mardan"},
                {id: 3, name: "talgat"},
                {id: 4, name: "berik"},
                {id: 5, name: "serik"},
            ],
            newMessageBody: '',

        },

    },
    render() {
        return 0
    },
    subs(observer) {
        this.render = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.dialogPage = profileReducer(this._state.dialogPage, action);
        this._state.profilePage = dialogsReducer(this._state.profilePage, action);
        this.render();
    },

}

export default store;