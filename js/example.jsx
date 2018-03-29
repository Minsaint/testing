// 引入react核心库
import React, { Component, createElement} from "react";
// 引入react渲染库
import { render } from 'react-dom';

// 创建组件类
class SubComponent extends Component {
    // 定义构造函数
    constructor () {
        super();
        this.state = {
            num: 0
        }
    }
    // 绑定点击事件
    click(e){
        e.target.className = 'tomato'
    }
    // 定义创建列表的方法
    creatList() {
        var cur = this.state.num % (this.props.data.length)
        return this.props.data.map((item, index) => {
               return <li style={{
                   display: cur === index ? "block" : "none",
               }} 
               key={index}>{item}</li>;
        } )
    }
    // 绑定点击切换事件
    change() {
        this.setState({
            num: ++this.state.num
        })
    }
    // 定义render   this指向类的实例化对象
    render() {
        return (
            <div>
                <ul>
                    {this.creatList()}
                </ul>
                <button onClick = {this.change.bind(this)}>换一换</button>
            </div>
        )
    }
}
// 定义默认数据,当没有data时呈现的内容
SubComponent.defaultProps = {
    data: [
        ['传奇单机版', '17173', '37游戏'],
        ['hao123游戏', '7k7k游戏', '新浪新闻'],
        ['环球网', '米尔军事', '凤凰军事'],
        ['4399游戏', '英雄联盟', '梦幻西游']
    ]
}
// 渲染虚拟dom
render(<SubComponent data={['传奇单机版', '17173', '37游戏', '4399游戏', '英雄联盟', '梦幻西游']}></SubComponent>, container);
render(<SubComponent></SubComponent>, container1);
// 