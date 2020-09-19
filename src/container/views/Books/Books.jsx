import React, {Component,Fragment} from "react";
import {getList} from '../../../api/index';
import Header from "../../../components/common/Header/Header";
import Book from "../../../components/Book/Book";
import BookList from "../../../components/BookList/BookList";
import Title from "../../../components/common/Title/Title";
import PropTypes from 'prop-types';
import "./Books.less";

export default class Books extends Component{
    constructor(props){
        super(props);
        this.state = {
            bookList:[],
            header:"KEEP READING",
            subTitle:"Read wide, and you will wisely write"
        }
    };
    componentDidMount(){
        getList().then(res=>{
            if(res.code === 200){
                this.setState({
                    bookList:res.data
                })
            }
        }).catch(err=>{
            console.log(err);
        })
    };
    render() {
        return( 
            <div className="books_cn">
                <Header class={"books_hd"}></Header> 
                <Title header={this.state.header} subTitle={this.state.subTitle}></Title>
                <div className="books_ls">
                {this.state.bookList.map((bookList,ls_key)=>(
                    <BookList key={ls_key} list={bookList}>
                        {bookList.list.map((book,bo_key)=>(
                            <Book key={bo_key} item={book}></Book>
                        ))}
                    </BookList>
                ))}
                </div>
               
            </div>
        )
    }
}
