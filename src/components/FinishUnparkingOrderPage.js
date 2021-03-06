import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import {
    Button,
    List,
    InputItem,
    WhiteSpace,
    WingBlank,
    Icon,
    NoticeBar,
    NavBar,
    Toast
} from "antd-mobile";
import { Link } from "react-router-dom";
const Item = List.Item;
export default class UnparkingPage extends Component {
    constructor(props) {
        super(props);
    }
    finish=()=>{
        Toast.info('取车完成 !!!', 1);
        console.log("取车成功\n-----------------------");
        console.log(this.props);
        this.props.routerMatch.history.push("/employees")
    }
    render() {
        const { history, location, match } = this.props.routerMatch;
        const carId=match.params.carId;
        console.log("取车的车牌号码\n----------------------");
        console.log(carId);
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.push("/employees")}
                >
                    取车
                </NavBar>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <List>
                    <WingBlank size="lg">
                        <Item>车牌号码：{carId}</Item>
                        <Item>取车时间：{new Date().toLocaleString()}</Item>

                    </WingBlank>
                </List>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <Button type="primary" onClick={()=>this.props.clickFinish(carId,this.finish)}>完成取车</Button>
                </WingBlank>
            </div>
        );
    }
}
