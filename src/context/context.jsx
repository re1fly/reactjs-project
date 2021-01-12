import React, {Children, Component, createContext} from 'react';

//createStore
const RootContext = createContext();

//Provider
const Provider = RootContext.Provider; //untuk menyimpan store atau state secara global dalam context
const GlobalProvider = (Children) => {
  return(
        class ParentComponent extends Component {
            state = {
                totalOrder: 12
            }

            //untuk merubah value
            dispatch = (action) => {
                if(action.type ==='ADD_ORDER'){
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if(action.type === 'MINUS_ORDER'){
                    if(this.state.totalOrder > 0){
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    }
                }
            }

            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {... this.props}/>
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

//Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return(
        class ParentConsumer extends Component {
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
        
    )
}

