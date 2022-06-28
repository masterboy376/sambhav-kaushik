import 'chart.js/auto'; //arc for chart js
import '../styles/globals.css'
import { ContextProvider } from '../context/context'
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return <>
    <ContextProvider>
      <div className="overflow-x-hidden bg-gray-900 transition-all duration-300 ease-in-out">
        <Component {...pageProps} />
      </div>
    </ContextProvider>
  </>
}

export default MyApp
