import React from 'react'
import styled from 'styled-components';

const Announcement = () => {
  return (
    <Wrapper>
    <div className="announcement">
        Don't miss our best deal, 30% on all our products !
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
.announcement{
  height: 2rem;
  background-color: white;
  color:black;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
`

export default Announcement;