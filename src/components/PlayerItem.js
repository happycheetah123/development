import React from "react";

class PlayerItem extends React.Component {


    render() {
        return (
            <div className="PlayerItem">
                <img src={this.props.image} height={100} alt={this.props.name}/>
                <div className="PlayerInfo">
                    <p className="name">{this.props.name}</p>
                    <p>({this.props.position})</p>
                </div>
                <p>${this.props.price}</p>
            </div>
        );
    }
}

export default PlayerItem