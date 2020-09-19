import React, {Component,Fragment} from "react";
import Title from "../../../components/common/Title/Title";
import Links from "../../../components/common/Header/Header";
import PropTypes from 'prop-types';
import "./Works.less";

export default class Works extends Component{
    constructor(props){
        super(props);
        this.state = {
            header:"I & C",
            subTitle:"Innovation and creativity to promote human progress"
        }
    }
    render() {
        return( 
           <div className="work_cn">
               <Links class={"works_hd"}></Links>
               <Title header={this.state.header} subTitle={this.state.subTitle}></Title>
           </div>
        )
    }
}
Works.childContextTypes = {
}
