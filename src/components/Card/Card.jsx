import React,{Component} from 'react';
import "./Card.less"

export default class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card">
                {this.props.children}
            </div>
        )
    }
}