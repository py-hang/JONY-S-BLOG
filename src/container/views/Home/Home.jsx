import React, {Component} from "react";
import Title from "../../../components/common/Title/Title";
import Header from "../../../components/common/Header/Header";
import PropTypes from 'prop-types';
import "./Home.less";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            header:"JONY'S BLOG",
            subTitle:"Read wide, and you will wisely write",
            isSpin:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isSpin:false
            })
        },1000)
    }
    render() {
        return( 
           <div className="home_cn">
               <Header class={"home_hd"}></Header>
               <Title header={this.state.header} subTitle={this.state.subTitle}></Title>
               <div className="home_ls">
                   <div className="home_dr slide-top">
                        <img src="images/home_01.png" alt=""/>
                   </div>
                  <div className="home_ls">

                  </div>
               </div>
           </div>
        )
    }
}