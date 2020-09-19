import React from "react";
import Introduce from './../container/views/Introduce/Introduce';
import Home from './../container/views/Home/Home';
import Works from './../container/views/Works/Works';
import Notes from './../container/views/Notes/Notes';
import Books from './../container/views/Books/Books';
import About from './../container/views/About/About';
import Links from "./../container/views/Links/Links";

// 路由懒加载
// const xxx = React.lazy(()=>import("url"))

const routes = [{
        path: '/',
        redirect: '/introduce'
    },
    {
        path: '/introduce',
        component: Introduce,
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/works',
        component: Works,
    },
    {
        path: '/notes',
        component: Notes,
    },
    {
        path: '/books',
        component: Books,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/links',
        component: Links,
    },
];

export default routes