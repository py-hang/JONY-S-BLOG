import React,{Component,Suspense} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
export default class RouterView extends Component{
    render(){
        let { routes} = this.props
        const Routes = routes.filter((item)=>!item.redirect)
        const redirect = routes.filter((item)=>item.redirect)
        return(
            <Suspense fallback={()=>{}}>
                <Switch>
                    {
                        Routes.map((item,index)=>{
                            return(
                                <Route
                                    key={index}
                                    path={item.path}
                                    render={(routeProps)=>{
                                        console.log(routeProps);
                                        if(item.children){
                                            return <item.component {...routeProps} routes={item.children}/>
                                        }
                                        return <item.component {...routeProps}/>
                                    }}
                                ></Route>
                            )
                        })
                    }
                    {
                        redirect.map((item,index)=>{
                            return(
                                <Redirect
                                    key={index}
                                    from={item.path}
                                    to={item.redirect}
                                ></Redirect>
                            )
                        })
                    }
                </Switch>
            </Suspense>

        )
    }
}
