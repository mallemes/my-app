import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activeMode = () =>{
        this.setState({editMode:true})
        console.log(this.props.status)
        }
    deActiveMode = () =>{
        console.log(this.state.status)
        this.setState({editMode:false})
        this.props.setUserStatus(this.state.status)
        // this.state.editMode = false
        console.log(this.props.status)
    }
    setStatus = (e)=>{
        this.setState({status: e.target.value})
    }

    render() {
        return (
            <div>{!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activeMode}>{this.props.status}</span>
                </div>
            }{this.state.editMode &&
                <div>
                    <input type="text" onChange={this.setStatus} autoFocus={true} onBlur={this.deActiveMode} value={this.state.status}/>
                </div>
            }
            </div>

        );
    };
}

export default ProfileStatus;