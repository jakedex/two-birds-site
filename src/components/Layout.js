import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children, hideNav }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href={`${withPrefix('/')}vendor/slick.min.css`}
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={`${withPrefix('/')}vendor/slick-theme.min.css`}
        />

        <link
          rel="stylesheet"
          type="text/css"
          href={`${withPrefix('/')}vendor/zoom-styles.css`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      {!hideNav && <Navbar />}
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
