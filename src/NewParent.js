import React,{Component,Fragment} from "react"
import Foo from
class Parent extends Component{
    // 构造函数
    constructor(){
        super()
        this.state={
            // 定义往bar里面传输的数据
            foomsg:"foo信息"
        }
    }
    send=()=>{
        EventEmmiter.emit("receve",this.state.foomsg)
    }
    render(){
        // 如果return不加()会出现什么问题？
        return(
            <Fragment>
                <div>
                    foo
                    <button onClick={this.send}>sendbar</button>
                </div>
            </Fragment>
        )
    }
}