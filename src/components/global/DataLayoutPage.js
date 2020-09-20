import React, {Component} from "react";


import "../../assets/css/materialIcons.css";
import "../../assets/css/matchScoutGlobal.css";
import {Button, message} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default class DataLayoutPage extends Component {

    UNSAFE_componentWillMount() {
        this.setState({matchType: "QUAL", matchNum: 1, pos: this.props.pos});
        this.updateType = this.updateType.bind(this);
        this.updateMatchNum = this.updateMatchNum.bind(this);
        this.updatePos = this.updatePos.bind(this);
        this.submit = this.submit.bind(this);

    }


    updateType(type) {
        this.setState({matchType: type});
    }

    updateMatchNum(matchNum) {
        if (matchNum !== undefined) {

            this.setState({matchNum: matchNum.target.value});


        }
    }

    updatePos(pos) {
        message.info(`Updated Position: ${pos}`, 1);
        // eslint-disable-next-line react/prop-types
        this.props.positionCallback(pos);

        this.setState({pos: pos});

    }

    submit() {
        console.log("SUBMITTING");
        // eslint-disable-next-line react/prop-types
        this.props.callback({matchNum: 1});
    }

    render() {


        return (
            <div>
                <h1>Among Us Tracker</h1>
                <br/>


                <Button type="primary" shape="round" icon="right-circle"
                        size={'large'} onClick={this.submit}>
                    Begin Match
                </Button>

            </div>
        );
    }
}
