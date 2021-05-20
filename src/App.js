import React from 'react'
import Header from "./components/Header"
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
                <h2>Home Page</h2>
            </MainWrapper>
        </GlobalWrapper>
    )
}

export default App