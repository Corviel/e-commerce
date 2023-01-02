import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <p>Sorry, the page you tried cannot be found</p>
        <Link to="#/" className="btn">
          Get back to Home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  p {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
