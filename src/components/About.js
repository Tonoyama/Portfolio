import React, { Component } from 'react';
import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import AboutOther from './Card/Card.js'
import portfolio from './images/portfolio.png'
import maskdetection from './images/maskdetection.jpg'
import haikupic from './images/haiku.png'
import opencloudmedical from './images/opencloudmedical.jpg'
import MediaQuery from 'react-responsive'

const TAB_TYPES = {
    HOME: "home",
    ABOUT: "about",
    WORKS: "works"
};

const tabData = [
    {
        text: <span className="fa-fw"><FontAwesomeIcon icon={faNetworkWired} /> Web</span>,
        type: TAB_TYPES.HOME
    },
    {
        text: <span className="fa-fw"><FontAwesomeIcon icon={faChartBar} /> ML</span>,
        type: TAB_TYPES.ABOUT
    },
    {
        text: <span className="fa-fw"><FontAwesomeIcon icon={faSmile} /> Other</span>,
        type: TAB_TYPES.WORKS
    }
];

const Tabs = ({ currentTabType, tabData, onClick }) => (
    <ul className="tabs">
        {tabData.map(tab => (
            <li
                className={currentTabType === tab.type ? "active" : ""}
                onClick={() => onClick(tab.type)}
            >
                {tab.text}
            </li>
        ))}
    </ul>
);

const TabContext = React.createContext();

class App extends Component {
    static Home = ({ children }) => (
        <TabContext.Consumer>
            {value => (value.tabType === TAB_TYPES.HOME ? children : null)}
        </TabContext.Consumer>
    );
    static About = ({ children }) => (
        <TabContext.Consumer>
            {value => (value.tabType === TAB_TYPES.ABOUT ? children : null)}
        </TabContext.Consumer>
    );
    static Works = ({ children }) => (
        <TabContext.Consumer>
            {value => (value.tabType === TAB_TYPES.WORKS ? children : null)}
        </TabContext.Consumer>
    );
    static Tabs = props => (
        <TabContext.Consumer>
            {value => (
                <Tabs
                    currentTabType={value.tabType}
                    tabData={tabData}
                    onClick={value.changeTab}
                    {...props}
                />
            )}
        </TabContext.Consumer>
    );
    state = {
        currentTabType: TAB_TYPES.HOME
    };

    changeTab = tabType => {
        this.setState({ currentTabType: tabType });
    };

    render() {
        return (
            <TabContext.Provider
                value={{
                    tabType: this.state.currentTabType,
                    changeTab: this.changeTab
                }}
            >
                {this.props.children}
            </TabContext.Provider>
        );
    }
}


const About = () => {

    return (
        <App>
            <MediaQuery query="(min-width: 768px)">
                <App.Tabs />
                <App.Home>
                    <AboutOther img={portfolio} title="ポートフォリオサイト" comment="React を使った SPA(Single Page Application) です。ホスティングに AWS Amplify を使用し迅速なデプロイを実現しました。" />
                </App.Home>
                <App.About>
                    <AboutOther img={maskdetection} title="マスク非着用者検出 AI" comment="学習済みモデルを基に OpenCV で、マスク非着用者を検出する機能を短期間で実装しました。その結果、大学のオープンキャンパスの展示物として、全国版の朝日新聞と読売新聞に掲載されました。" />
                    <AboutOther img={haikupic} title="俳句自動生成 AI" comment="高校時代、俳句部に所属していたため、AI に俳句を創れるのか？という疑問が生まれ作りました。現代俳句協会様から頂いた俳句 39,000 件を基に深層学習(Transformer)で学習、生成しました。" />
                </App.About>
                <App.Works>
                    <AboutOther img={opencloudmedical} title="OpenCloudMedical" comment="高校生の時に、実家の医療会計・受付システムを構築しました。その経験を基に Docker コンテナ版の OSS「OpenCloudMedical」を開発しました。" />
                </App.Works>
            </MediaQuery>
            <MediaQuery query="(min-width: 1100px)">
                <App.Tabs />
                <App.Home>
                    <AboutOther img={portfolio} title="ポートフォリオサイト" comment="React を使った SPA(Single Page Application) です。ホスティングに AWS Amplify を使用し迅速なデプロイを実現しました。" />
                </App.Home>
                <App.About>
                    <AboutOther img={maskdetection} title="マスク非着用者検出 AI" comment="学習済みモデルを基に OpenCV で、マスク非着用者を検出する機能を短期間で実装しました。その結果、大学のオープンキャンパスの展示物として、全国版の朝日新聞と読売新聞に掲載されました。" />
                    <AboutOther img={haikupic} title="俳句自動生成 AI" comment="高校時代、俳句部に所属していたため、AI に俳句を創れるのか？という疑問が生まれ作りました。現代俳句協会様から頂いた俳句 39,000 件を基に深層学習(Transformer)で学習、生成しました。" />
                </App.About>
                <App.Works>
                    <AboutOther img={opencloudmedical} title="OpenCloudMedical" comment="高校生の時に、実家の医療会計・受付システムを構築しました。その経験を基に Docker コンテナ版の OSS「OpenCloudMedical」を開発しました。" />
                </App.Works>
            </MediaQuery>
        </App>
    );
}

export { About };
