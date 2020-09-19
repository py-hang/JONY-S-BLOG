import React, { Component } from 'react';
import "./Title.less"

export default class PageTitle extends Component {
    render() {
        return (
            <div className="title">
                {this.props.children}
                <div className="title_h animista_txt">{this.props.header}</div>
                <div className="title_s animista_txt">{this.props.subTitle}</div>
            </div>
        )
    }
}