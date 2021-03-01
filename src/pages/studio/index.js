import React from 'react'

import Layout from '../../components/Layout'
import StudioRoll from '../../components/StudioRoll'

export default class StudioIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <StudioRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
