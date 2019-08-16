import React,{Component,Fragment} from "react"
// 定义组件
class Parent extends Component{
    // 构造函数
    constructor(){
        super();
        this.state={
            info:"我是顶级公用组件"
        }
    }
    // public 公共的    private 私有  static 静态     受保护
    // childContextTypes  对接收到的属性进行校验  只能定义在顶级
    static childContextTypes={
        a:PropTypes.string
    }
    getChildContext(){
        return{
            a:this.state.info
        }
    }





    login(){

    }
    render(){
        return(
            <Fragment>
                <div className="wrap">
                    <div className="wrap_center">
                        <ul>
                            <li>首页</li>
                            <li>新闻</li>
                            <li>关于</li>
                            <li>接收：{this.state.getChildMsg}</li>
                        </ul>
                        <div ref="login" className="login" onClick={this.login}>登录</div>
                        <div className="wrap_right" ref="child">
                            <Child username={this.state.username} callback={this.callback}></Child>
                        </div>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}