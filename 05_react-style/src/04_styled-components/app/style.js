import styled from "styled-components"
export const AppWrapper = styled.div`
  .title {
    font-size: 24px;
    color: red;

    &:hover {
      color: blue;
    }

    &::after {
      content: 'aa'
    }
  }
`