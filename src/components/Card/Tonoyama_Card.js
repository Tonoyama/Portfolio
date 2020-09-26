import React from 'react';
import '../assets/styles/Card.css'
import Clock from '../Clock.js'
import tonoyama from '../assets/images/tonoyama.jpg'

class Card extends React.Component {
    render() {
        return (
            <div className="contents">
                <div className="Sidenav">
                    <img className="Cardimg" src={tonoyama} alt="" />
                    <div>
                        <span className="Bold-font">I'm Tonoyama</span><span className="Light-font"> yudai</span>
                    </div>
                </div>
                <div className="Comment">
                    <p>今日も１日頑張るぞい╭( ･ㅂ･)و</p>
                    <br />
                    <p>殿山 雄大と申します。大阪のとある大学の情報工学科 学部１年です。</p>
                    <p>クラウドコンピューティング、Web 開発、機械学習に興味があります。</p>
                    <p>
                        <Clock></Clock> 現在、京都のWeb系自社開発企業でアルバイトしていて、
                        主に JavaScript を使った開発やテストを行っています。
                    </p>
                </div>
            </div>
        )
    }
}
export default Card