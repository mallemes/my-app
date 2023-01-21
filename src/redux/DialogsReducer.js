
const defSate = {  posts: [
        {id: 1, text: "offd vfnvn vkvvp"},
        {id: 2, text: "f dffv eff vfvfdd"},
        {id: 3, text: "12 algaaaaaaaaaaaaaaaaaa"},
        {id: 4, text: "offd vfnvn vkvfdvf vffdvvvp"},
        {id: 5, text: "offd vfnvnr43efgrcvegr  reeegr vkvvp"},
        {id: 6, text: "offbgbbrgfddfd vfnvn vkvvp"},
    ],
    newText: '',}
const dialogsReducer = (state = defSate, action) => {
    if (action.type === "ADD-POST") {
        const obj = {id: 11, text: state.newText}
        const copyState = {...state};
       copyState.posts = [...state.posts];
       copyState.posts.push(obj);
        copyState.newText = '';
        return copyState;

    } else if (action.type === "NEW-POST-VALUE") {
       const copyState2 = {...state};
        copyState2.newText = action.newText;
        return copyState2;
    }
    return state
}
export default dialogsReducer;