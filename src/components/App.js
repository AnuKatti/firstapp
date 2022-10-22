import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return(
        <>
            <Header/>
            <h1 style ={{textAlign:'center'}} >Hi from React</h1>
            <h2 style ={{textAlign:'center'}}> Test Component</h2>
            <Footer year="2022" month="Oct"/>
        </>
    )
}

export default App;