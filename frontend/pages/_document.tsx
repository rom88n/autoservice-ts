import { ServerStyleSheets } from "@material-ui/styles"
import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"
import flush from "styled-jsx/server"
import { DocumentContext } from "next/document"
import { Store } from "redux"

/**
 * NextDocumentContext with redux store context
 * @tree
 */
type AppContext = DocumentContext & {
  readonly store: Store
}

type Props = {
  pageProps: any
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
 */
class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: AppContext): Promise<any> => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="ru">
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </Html>
    )
  }
}

export default MyDocument
