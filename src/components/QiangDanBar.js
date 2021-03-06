import React, { Component } from "react";
import { NavBar, List, Toast } from "antd-mobile";
import Scramble from "./Scramble ";

const Item = List.Item;
const Brief = Item.Brief;

export default class QiangDan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "yellowTab"
        };
    }
    showToast() {
        Toast.info("抢单成功！！！", 1);
    }
    render() {
        const boyId = window.localStorage.id;
        const { unFinishOrders, clickOrder } = this.props;
        let orderList = unFinishOrders.map(order => {
            const { id, carId, createdDate } = order;
            return (
                <Item
                    extra="抢单"
                    arrow="horizontal"
                    onClick={() => {
                        clickOrder(id, boyId);
                        this.showToast()
                    }}
                >
                    车牌号：{carId}
                    <Brief>停车时间 {createdDate}</Brief>
                </Item>
            );
        });
        return (
            <div>
                <NavBar>订单</NavBar>
                <List>{orderList}</List>
            </div>
        );
    }
}
