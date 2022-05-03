import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Zoom from 'react-medium-image-zoom'


const LinkButton = ({title, link}) => (
  <Link
    to={link}
    style={{
      display: 'inline-block',
      color: '#39A0FF',
      padding: '1rem 2rem',
      margin: '0 1rem 2rem',
      border: '3px solid rgba(57,160,255,0.2)',
      borderRadius: '99px',
      textAlign: 'center',
      width: '360px',
      transition: 'opacity 0.3s ease'
    }}
  >
    {title}
    </Link>
)

const MarqueeText = ({text}) => (
  <div style={{
    marginRight: '2rem',
    transition: 'opacity .15s linear',
  }}>
    {text}
  </div>
)

const MarqueeBanner = ({text}) => (
  <div
    style={{
      background: 'white',
      // color: 'white',
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
      display: 'flex',
      lineHeight: '1',
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.25px',
      textTransform: 'uppercase',
      width: '100%',
      zIndex: '99',
      position: 'fixed',
      top: 0
    }}
  >
    <div
      className = 'animate-text'
      style={{
        display: 'flex',
        padding: '0.75rem 0',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        whiteSpace: 'nowrap',
        willChange: 'transform'
      }}
    >
      {[...Array(10)].map((el, i) => (<MarqueeText key={i} text={text} />))}
    </div>
  </div>
)

const Artwork = ({src}) => (
  <Zoom>
    <img
      style={{
        borderRadius: 8,
        filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 8px 16px) drop-shadow(rgba(0, 0, 0, 0.15) 0px 2px 10px)',
        margin: '1vw',
        width: '16vw',
        maxWidth: '280px'
      }}
      src={src}
      alt=""
    />
  </Zoom>
)

export const IndexPageTemplate = ({
  image,
  title,
}) => (
  <div
    className="index-page"
    style={{
      backgroundColor: '#fff',
      fontSize: '1.5rem'
    }}
  >
    <MarqueeBanner text="Initial public launch in 4 days. more coming soon  🤤" />
    <div
      className='logo'
      style={{
        display: 'flex',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* <h1
        className="has-text-weight-bold is-size-1-mobile is-size-1-tablet is-size-1-widescreen"
        style={{
          color: '#D4FF00',
          fontFamily: 'Pilowlava',
          fontSize: '4rem',
          lineHeight: '1',
          padding: '0.5em',
        }}
      >
        {title}
      </h1> */}
      <img
        style={{
          margin: '5rem 0 4rem',
          width: '60%',
          maxWidth: '768px'
        }}
        src='img/logo.svg'
        alt=""
      />
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <img
        style={{
          borderRadius: 16,
          filter: 'drop-shadow(0px 39px 69px rgba(0, 0, 0, 0.15)) drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.28))',
          width: '80%',
          maxWidth: '1200px'
        }}
        src={image && !!image.childImageSharp ? image.childImageSharp.fluid.src : image}
        alt=""
      />
    </div>
    
    <section className="section section--gradient">
      <div className="container" style={{ maxWidth: '720px' }}>
        <div className="columns">
          <div className="column is-12">
            <div className="section">
              A collection  of 520 unique hand drawn artworks. Each piece has been formed with magic and have been energetically attuned to you.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
            </div>
            <div className="social-button-group" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <LinkButton title="View Collection on OpenSea" link="https://opensea.io/" />
                <LinkButton title="View Collection on Zora" link="https://opensea.io/" />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <LinkButton title="Follow on Twitter " link="https://opensea.io/" />
                <LinkButton title="Join the Discord" link="https://opensea.io/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="content">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <h2
                className="has-text-weight-bold is-size-1-mobile is-size-1-tablet is-size-1-widescreen"
                style={{
                  color: '#39A0FF',
                  fontFamily: 'PicNic',
                  fontSize: '4rem',
                  lineHeight: '1',
                  padding: '0.5em',
                }}
              >
                INITIAL RELEASE &nbsp; 05/05/22
              </h2>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Artwork src="img/1:500.jpg" />
              <Artwork src="img/2:500.jpg" />
              <Artwork src="img/3:500.jpg" />
              <Artwork src="img/4:500.jpg" />
              <Artwork src="img/5:500.jpg" />
            </div>


            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '8rem'
            }}>
              <h2
                className="has-text-weight-bold is-size-1-mobile is-size-1-tablet is-size-1-widescreen"
                style={{
                  color: '#39A0FF',
                  fontFamily: 'PicNic',
                  fontSize: '4rem',
                  lineHeight: '1',
                  padding: '0.5em',
                }}
              >
                SECOND RELEASE &nbsp; 06/05/22
              </h2>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Artwork src="img/6:500.jpg" />
              <Artwork src="img/mystery.png" />
              <Artwork src="img/mystery.png" />
              <Artwork src="img/mystery.png" />
              <Artwork src="img/mystery.png" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--gradient">
      <div className="container" style={{ maxWidth: '720px' }}>
        <div className="columns">
          <div className="column is-12">
            <div className="section">
              A collection  of 520 unique hand drawn artworks. Each piece has been formed with magic and have been energetically attuned to you.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="section" style={{ fontSize: '1rem', textAlign: 'center', opacity: 0.4 }}>© 2022 TWO BIRDS, ONE STONE</div>
          </div>
        </div>
      </div>
    </section>
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
