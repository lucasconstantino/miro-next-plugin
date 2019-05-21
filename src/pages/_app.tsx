import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <script src="https://miro.com/app/static/rtb.sdk.1.1.js" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
