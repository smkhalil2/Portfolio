import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from '@/theme/ThemeContext'
config.autoAddCss = false


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}
