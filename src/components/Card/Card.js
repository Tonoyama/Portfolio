import React from 'react';
import './Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="contents">
                <div className="Sidenav">
                    <img className="Cardimg" src={this.props.img} alt="" />
                </div>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="Comment">
                    {this.props.comment}
                </div>
            </div>
        )
    }
}
export default Card