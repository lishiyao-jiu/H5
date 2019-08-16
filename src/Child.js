// Fragment   react16
import React,{Component,Fragment} from "react;"
class child extends Component{
    constructor(){
        super()
    }
    render() {
        return(
            <Fragment>
                <div>{this.props.username}</div>
            </Fragment>
        )
    }
}
export default Child