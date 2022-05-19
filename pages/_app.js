import 'chart.js/auto';
import '../styles/globals.css'
// import '../styles/lightscroll.css'
import '../styles/darkscroll.css'
import '../styles/custom.css'
import { ContextProvider } from '../context/context'


function MyApp({ Component, pageProps }) {
  return <>
    <ContextProvider>
      <div className="overflow-y-hidden">
        <Component {...pageProps} />
      </div>
    </ContextProvider>
  </>
}

export default MyApp
