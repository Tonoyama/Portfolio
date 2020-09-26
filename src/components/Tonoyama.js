import React from 'react';
import Card from './Card/Card.js'
import Menu from './Menu.js'
import tonoyama from './assets/images/tonoyama.jpg'
import MediaQuery from 'react-responsive'

const Tonoyama = () => {

    return (
        <div className="Body">
            <MediaQuery query="(max-width: 780px)">
                <Menu />
                <Card img={tonoyama} boldfont="I'm Tonoyama" lightfont="yudai" title="今日も１日頑張るぞい╭( ･ㅂ･)وｸﾞｯ" comment="殿山 雄大と申します。大阪のとある大学の情報工学科 学部１年です。クラウドコンピューティング、Web 開発、機械学習に興味があります。現在、京都のWeb系自社開発企業でアルバイトしていて、
                        主に JavaScript を使った開発やテストを行っています。" />
            </MediaQuery>
            <MediaQuery query="(min-width: 779px)">
                <Card img={tonoyama} boldfont="I'm Tonoyama" lightfont="yudai" title="今日も１日頑張るぞい╭( ･ㅂ･)وｸﾞｯ" comment="殿山 雄大と申します。大阪のとある大学の情報工学科 学部１年です。クラウドコンピューティング、Web 開発、機械学習に興味があります。現在、京都のWeb系自社開発企業でアルバイトしていて、
                        主に JavaScript を使った開発やテストを行っています。" />
            </MediaQuery>
        </div>
    );
}

export { Tonoyama };
