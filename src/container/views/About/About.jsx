import React,{Component,Fragment} from 'react';
import Header from "../../../components/common/Header/Header";
import Card from '../../../components/Card/Card';
import "./About.less";

export default class About extends Component{
    render(){
        return(
            <div className="about_cn">
                <Header class={"about_hd"}></Header>
            </div>
        )
    }
}