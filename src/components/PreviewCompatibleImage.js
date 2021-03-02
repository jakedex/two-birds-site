import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Zoom from 'react-medium-image-zoom'

const wrapperStyle = {
  width: '100%',
  height: '100%'
}

const ImgZoom = (props) => {
  return (
    <Zoom>
      <Img style={wrapperStyle} {...props} />
    </Zoom>
  )
}

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <ImgZoom fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <ImgZoom fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
