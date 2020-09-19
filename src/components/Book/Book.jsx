import React,{Component} from 'react';
import "./Book.less"

export default class Book extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultUrl:"images/spin.png"
        }
    }
    render(){
        return(
            <div className="book slide-top">
                <div className="book_tp" style={{display:this.props.item.title ? 'block' : 'none'}}>
                    {this.props.item.title}
                </div>
                <img className="book_img" src={this.props.item.url||this.state.defaultUrl} alt={this.props.item.content}/>
                <div className="book_ne">
                    {this.props.item.name}
                </div>
            </div>
        )
    }
}