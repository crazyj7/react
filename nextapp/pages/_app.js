import '@/styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Top from '../src/component/Top'
import Footer from '../src/component/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Top/>
      <div style={{margin:20}}>
        <Component
        {...pageProps} />
      </div>
       <Footer/>
    </div>
  )
}
