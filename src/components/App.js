import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './productDetails';
import JSON from './db.json';

class App extends Component{

    constructor(){
        super()
        this.state = {
            productData:JSON,
            filteredData:JSON
        }
    }
    filteredData = (keyword) => {
        let output=this.state.productData.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
    
        this.setState({filteredData:output})

        let outputbrand=this.state.productData.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
    
        this.setState({filteredData:outputbrand})

        // let outputcost=this.state.productData.filter((data) => {
        //     return (data.cost <= 200)
        // })
    
        // this.setState({filteredData:outputcost})
    }
    render(){
        return(
            <>
                <Header userInput={(data) =>{this.filteredData(data)} }/>
                <Product prodData={this.state.filteredData}/>
                <Footer year="2022" month="Oct"/>
            </>
        )
    }
}
    

export default App;
