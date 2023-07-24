import PropTypes from 'prop-types'
import { GlobalStyle } from "../styles/globalStyle"
import { ThemeProvider } from 'styled-components';
import { themes } from '../lib/themes/themes';
import { Provider as ProviderRedux } from 'react-redux';
import store from '../store/store';
import Head from "next/head";
import { Layout } from "../components";
function MyApp({ Component, pageProps }) {
  return(
  <>
    <Head>
      <title>  Encuestas Sit </title>
    </Head>
    <ProviderRedux store={store}>
    <ThemeProvider theme={themes.alcaldia}>
      <GlobalStyle />
      <Layout background={(theme) => theme.colors.fondogris}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </ProviderRedux>
  </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp