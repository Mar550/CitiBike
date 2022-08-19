import React from 'react'
import styled from 'styled-components';

const Announcement = () => {
  return (
    <Wrapper>
    <div className="announcement">
        Don't miss our new best deal, 30% on all the products !
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
.announcement{
  height: 2.1rem;
  background-color: #383c44;
  color:white;
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
`

export default Announcement;