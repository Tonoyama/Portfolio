import React from 'react';
import '../assets/styles/Card.css'
import MediaQuery from 'react-responsive'

class Card extends React.Component {
    render() {
        return (
            <div className="App">
                <MediaQuery query="(max-width: 780px)">
                    <div className="Contents">
                        <div className="Sidenav">
                            <img className="Cardimg" src={this.props.img} alt="" />
                        </div>
                        <span className="Bold-font">
                            {this.props.boldfont}
                        </span>
                        <span className="Light-font">
                            {this.props.lightfont}
                        </span>
                        <div className="title">
                            {this.props.title}
                        </div>
                        <div className="Comment">
                            {this.props.comment}
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 781px)">
                    <div className="PC_Contents">
                        <div className="PC_Sidenav">
                            <img className="Cardimg" src={this.props.img} alt="" />
                        </div>
                        <div className="PC_title">
                            {this.props.title}
                        </div>
                        <div className="PC_Comment">
                            {this.props.comment}
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}
export default Card