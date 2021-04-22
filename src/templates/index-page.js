import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const linkStyle = { fontSize: '1.2em', color: 'black', margin: '0.4em 0', textAlign: 'center'};

export const IndexPageTemplate = ({
  image,
  title,
}) => (
  <div>
    <div
      className="index-page margin-top-0"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${
          image && !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        backgroundColor:'white'
      }}
    >
      <div
        style={{
          display: 'flex',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-5-widescreen"
          style={{
            color: 'black',
            lineHeight: '1',
            padding: '0.5em',
          }}
        >
          {title}
        </h1>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
          }}>
            <Link style={linkStyle} to="/work">work</Link>
            {/* <Link style={linkStyle} to="/studio">studio</Link> */}
            <Link style={linkStyle} to="/about">bio</Link>
            <Link style={linkStyle} to="/contact">contact</Link>
          </div>
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout hideNav>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
