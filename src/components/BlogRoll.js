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

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <Slider {...sliderSettings}>
          {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} style={{outline: 'none'}}>
              <article>
                <header>
                  {post.frontmatter.image ? (
                    <div className="featured-thumbnail" style={{maxWidth: '560px', margin: '0 auto 2em'}}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.image,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p style={{ textAlign: 'center' }}>
                    <span className="is-size-6">{post.frontmatter.title}</span>
                    <span className="is-size-6 is-block">
                      Oil, acrylic, and charcoal on canvas
                    </span>
                    <span className="is-size-6 is-block">
                      48” x 60”
                    </span>
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

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
