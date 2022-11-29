import React from "react";


class PlayerItem extends React.Component {


    render() {
        const addToTotal = this.props.addToTotal;
        const removeFromCart = this.props.removeFromCart;
        const isInCart = this.props.isInCart;
        let button;
        if (isInCart) {
            button = <button onClick={() => {
                removeFromCart(this.props)
            }}>
                Remove
            </button>;
          } else {
            button = <button onClick={() => {
                addToTotal(this.props)
            }}>
            ${this.props.price}
            </button>
          }
        return (
            <div className="PlayerItem">
                <img src={this.props.image} height={100} alt={this.props.name}/>
                <div className="PlayerInfo">
                    <p className="name">{this.props.name}</p>
                    <p>({this.props.position})</p>
                </div>
                <p className="PlayerInfo">All-Pro: ({this.props.allpro})</p>
                {button}

                
            </div>
        );
    }
}

export default PlayerItem