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

const ALL_YEARS = 'all'

const uniq = a => [...new Set(a)];
const getYears = (posts) => uniq(posts.map(({ node: post }) => post.frontmatter.date))

const filterPostsByYear = (posts, year) => posts.filter(({ node: post }) => year === post.frontmatter.date || year === ALL_YEARS)

const yearPicker = (posts, selectedYear, onSwitchYear) => (
  <div className="year-picker" style={{display: 'inline-flex', border: '1px solid black', borderRadius: 99, padding: "0 12px" }}>
    {posts && [ALL_YEARS, ...getYears(posts)].map((year, i) => (
      <a key={year} className={`is-size-6 ${selectedYear === year ? 'is-selected' : ''}`} onClick={() => onSwitchYear(year)} style={{marginLeft: i > 0 ? 8 : 0}}>{year}</a>
    ))}
  </div>
)

const imageSlider = (posts) => (
  <Slider {...sliderSettings}>
    {posts.map(({ node: post }) => (
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
            <p className="didactic">
              <span className="is-size-6">{post.frontmatter.title}</span>
              <span className="is-size-6">{post.frontmatter.date}</span>
              <span className="is-size-6">{post.frontmatter.materials}</span>
              <span className="is-size-6">{post.frontmatter.size}</span>
            </p>
          </header>
        </article>
      </div>
    ))}
  </Slider>
)

class WorkRoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedYear: ALL_YEARS }
  }

  switchYear = (newSelection) => {
    if (this.state.selectedYear !== newSelection) {
      this.setState({ selectedYear: newSelection })
    }
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="work-page" style={{maxWidth: '640px', margin: '0 auto', textAlign: 'center'}}>
        { posts && yearPicker(posts, this.state.selectedYear, this.switchYear) }
        { posts && imageSlider(filterPostsByYear(posts, this.state.selectedYear)) }
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
                date(formatString: "YYYY")
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
