import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: true,
    }
    activeMode = () =>{
        this.setState({editMode:true})
        this.state.editMode = true}
    deActiveMode = () =>{
        this.setState({editMode:false})
        this.state.editMode = false}

    render() {
        return (
            <div>{!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activeMode.bind(this)}>{this.props.status}</span>
                </div>
            }{this.state.editMode &&
                <div>
                    <input type="text" autoFocus={true} onBlur={this.deActiveMode.bind(this)} value={this.props.status}/>
                </div>
            }
            </div>

        );
    };
}

export default ProfileStatus;