import React,{Component} from 'react'
import "./BookList.less";

export default class BookList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="book_ls animista_pg">
                <div className="book_ls_tl">
                    <div>{this.props.list.title}</div>
                    <img src="images/book_02.png" alt="book_02"/>
                </div>
                <div className="book_ls_cn">
                  {this.props.children}  
                </div>
            </div>
        )
    }
}