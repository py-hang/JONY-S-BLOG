import React, {Component,Fragment} from "react";
import Header from '../../../components/common/Header/Header';
import {getList} from '../../../api';
import PropTypes from 'prop-types';
import '../Introduce/Introduce.less'

export default class Introduce extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            isSpin:true,
            NavList:[
                {value:"HOME",path:"/home"},
                {value:"WORKS",path:"/works"},
                {value:"NOTES",path:"/notes"},
                {value:"BOOKS",path:"/books"},
                {value:"LINKS",path:"/links"},
                {value:"ABOUT",path:"/about"},
            ]
        }
    }
    handleChange = (value)=>{
        this.setState(()=>{
            return{
                list:value
            }
        })
    };
    getChildContext = ()=>{
        return {
            list:this.state.list,
            handleChange:this.handleChange
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                        isSpin:false
                })
        },1000)
        getList().then(res=>{
            if(res.status === 200){
                this.setState({
                    list:res.data
                });
            }
        })
    }
    
    render() {
        return( 
            <div className="intro_cn">
                <div className={this.state.isSpin ? 'intro_sp':'intro_sp--hide'}></div>
                <img className={`intro_bg ${this.state.isSpin ? '' : 'animista_pg'}`} src="images/background.jpg" alt="background"/>
                <Header iconFlag={false} isSpin={this.state.isSpin} class={"intro_hd"}></Header>  
                <div className={`intro_tl ${this.state.isSpin ? '' : 'animista_txt'}`}>JONY'S BLOG</div>
                <img className={`intro_io ${this.state.isSpin ? '' : 'animista_pg'}`}  src="images/icon_02.png" alt="icon_02"/>
                <div className="intro_ft">
                    <p className={this.state.isSpin ? '' :'animista_txt'}>Continue to move forward, and finally see the dawn</p>
                </div>
            </div>
        )
    }
}
Introduce.childContextTypes = {
    list:PropTypes.array,
    handleChange:PropTypes.func
}
