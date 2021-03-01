import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Content, { HTMLContent } from './Content'

class StudioRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child blog-list-preview`}
              >
                {post.frontmatter.date ? (
                  <p className="post-meta date">
                    {post.frontmatter.date}
                </p>) : null}
                {post.frontmatter.title ? (
                  <header>
                  <p className="post-meta title is-size-4">
                    {post.frontmatter.title}
                  </p>
                </header>
                ) : null}
                {post.frontmatter.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.image,
                          alt: `image thumbnail for ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                <HTMLContent content={post.html} />
              </article>
            </div>
          ))}
      </div>
    )
  }
}

StudioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query StudioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "studio-post" } } }
        ) {
          edges {
            node {
              html
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
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
    render={(data, count) => <StudioRoll data={data} count={count} />}
  />
)