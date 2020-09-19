import React,{Component,Fragment} from 'react';
import Header from "../../../components/common/Header/Header";
import Title from "../../../components/common/Title/Title";
import "./Links.less";

export default class Links extends Component{
    constructor(props){
        super(props);
        this.state = {
            header:"OPEN EYES",
            subTitle:"Read wide, and you will wisely write"
        }
    }
    render(){
        return(
            <div className="links_cn">
                <Header class={"links_hd"}></Header>
                <Title header={this.state.header} subTitle={this.state.subTitle}></Title>
            </div>
        )
    }
}