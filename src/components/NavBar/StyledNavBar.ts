import styled from 'styled-components'

export default styled.nav`
  display: flex;
  gap: 10px;
  a {
    text-decoration: none;
    background-color: #0000ff66;
    border-radius: 2px;
    padding: 5px;
    color: #aaa;
    &:hover {
      transform: scale(0.95);
    }
    &.active {
      background-color: #0000ffcc;
      color: #fff;
    }
  }
`
