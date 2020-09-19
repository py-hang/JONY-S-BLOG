import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import "./Header.less";

class Header extends Component {
    static defaultProps = {
        iconFlag:true,
        isSpin:false
    }
    constructor(props){
        super(props);
        this.state = {
            NavList:[
                {value:"HOME",path:"/home"},
                {value:"WORKS",path:"/works"},
                {value:"NOTES",path:"/notes"},
                {value:"BOOKS",path:"/books"},
                {value:"LINKS",path:"/links"},
                {value:"ABOUT",path:"/about"},
            ],
            scrollFlag:false
        }
    };
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    };
    handleScroll = ()=>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.setState({
            scrollFlag:scrollTop === 0
        });
    };
    backHome = ()=>{
        this.props.history.push("/introduce");
    };
    render() {
        return (
            <div className={`${this.props.class} ${this.state.scrollFlag ? '' : 'header_sw'} ${this.props.isSpin ? '' :'animista_pg'}`}>
                <img style={{'display':this.props.iconFlag ? 'block' : 'none'}}
                    className="header_img animista_pg"
                    src="images/icon_01.png" alt="icon_01" 
                    onClick={this.backHome}
                />
                <ul className="header_ul">
                  {this.state.NavList.map((item,key)=>(
                      <Link key={key} className={this.props.isSpin ? '' :'animista_txt'} to={item.path}>
                        <li className="header_li" >{item.value}</li>
                      </Link>
                ))}   
                </ul>
            </div>
        )
    }
}
export default withRouter(Header);