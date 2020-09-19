import React, {Component,Fragment} from "react";
import Title from "../../../components/common/Title/Title";
import Links from '../../../components/common/Header/Header';
import {getList} from '../../../api';
import PropTypes from 'prop-types';
import "./Notes.less";

export default class Notes extends Component{
    constructor(props){
        super(props);
        this.state = {
            header:"RECORD LIFESTYLE",
            subTitle:"Innovation and creativity to promote human progress"
        }
    }
    render() {
        return( 
           <div className="notes_cn">
               <Links class={"notes_hd"}></Links>
               <Title header={this.state.header} subTitle={this.state.subTitle}></Title>
               <div className="notes_ls">

               </div>
           </div>
        )
    }
}
Notes.childContextTypes = {
}
