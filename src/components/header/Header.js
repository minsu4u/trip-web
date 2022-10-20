import React from 'react'
import styled from 'styled-components'
import BottomContainer from './BottomContainer'
import TopContainer from './TopContainer'

const Container = styled.div`
    max-width: 1160px;
    position: relative;
    margin: 0 auto;
`

function Header() {
    return (
        <div>
            <Container>
                <TopContainer />
                <BottomContainer />
            </Container>
        </div>
    )
}

export default Header