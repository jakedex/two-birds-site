import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Slider from 'react-slick'

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

class WorkRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="work-page" style={{maxWidth: '640px', margin: '0 auto'}}>
        <Slider {...sliderSettings}>
          {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} style={{outline: 'none'}}>
              <article>
                <header>
                  {post.frontmatter.image ? (
                    <div className="featured-thumbnail" style={{maxWidth: '500px', margin: '0 auto 2em'}}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.image,
                          alt: `image thumbnail ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p style={{ textAlign: 'center' }}>
                    <span className="is-size-6">{post.frontmatter.title}</span>
                    <span className="is-size-6 is-block">{post.frontmatter.materials}</span>
                    <span className="is-size-6 is-block">{post.frontmatter.size}</span>
                  </p>
                </header>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

WorkRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorkRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                materials
                size
                image {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <WorkRoll data={data} count={count} />}
  />
)
