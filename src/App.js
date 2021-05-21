import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from "./components/Header"
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import styled from 'styled-components'

const GlobalWrapper = styled.section`

    width: 100%;
    margin: 0 auto;
    --black: #150605;
    --red: #EA453C;
    --pink: #F47B6E;
    --light-blue: #EFFBFE;
    --blue: #ACE6EC;

    font-family: 'Poppins', sans-serif;
    padding: 0;

    a {
        text-decoration: none;
    }

    a:visited {
        color: var(--light-blue)
    }
    
    a:hover {
        color: var(--black)
    }
    

`
const MainWrapper = styled.main`

    max-width: 1260px;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;

`

function App() {
    return (
        <GlobalWrapper>
            <Header />
            <MainWrapper>
                <Switch>
                    <Route exact path='/'>
                        <Photos />
                    </Route>
                    <Route exact path='/'>
                        <h2>Home Page</h2>
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                </Switch>
            </MainWrapper>
        </GlobalWrapper>
    )
}

export default App