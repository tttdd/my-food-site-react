import '../../assets/styles/globals.css'
import "@fontsource/dm-sans";
import "@fontsource/rosario";
import type { AppProps } from 'next/app'
import Providers from "../components/Providers";
import 'swiper/css';

function MyApp({ Component, pageProps }: AppProps) {
  return   <Providers><Component {...pageProps} />  </Providers>
}

export default MyApp
