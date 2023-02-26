import React, {useEffect, useState} from 'react';
const ProfileStatus = (props) => {
    const [status,setStatus] = useState(props.status)
    const [editMode,setEditMode] = useState(false)
    const deActiveMode = () =>{
        setEditMode(false)
        props.setUserStatus(status)
    }
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    const changeValue = (e)=>{
        setStatus(e.target.value)
    }
    return (
        <div>{!editMode &&
            <div>
                <span onDoubleClick={()=>setEditMode(true)}>{props.status || "no status"}</span>
            </div>
        }{editMode &&
            <div>
                <input type="text" onChange={changeValue} autoFocus={true} onBlur={deActiveMode} value={status}/>
            </div>
        }
        </div>
    );
};

export default ProfileStatus;

// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status,
//     }
//
//     activeMode = () =>{
//         this.setState({editMode:true})
//         console.log(this.props.status)
//     }
//     deActiveMode = () =>{
//         console.log(this.state.status)
//         this.setState({editMode:false})
//         this.props.setUserStatus(this.state.status)
//         // this.state.editMode = false
//         console.log(this.props.status)
//     }
//     setStatus = (e)=>{
//         this.setState({status: e.target.value})
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.status !==this.props.status){
//             this.setState({status:this.props.status})
//         }
//     }
//
//     render() {
//         return (
//             <div>{!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={ this.activeMode}>{this.props.status}</span>
//                 </div>
//             }{this.state.editMode &&
//                 <div>
//                     <input type="text" onChange={this.setStatus} autoFocus={true} onBlur={this.deActiveMode} value={this.state.status}/>
//                 </div>
//             }
//             </div>
//
//         );
//     };
// }