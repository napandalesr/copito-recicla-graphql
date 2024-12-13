import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "@/containers/Providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  return <Providers>
    <GoogleAnalytics GA_MEASUREMENT_ID={'G-4ZXVH1BG39'} />
    <Component {...pageProps} />
  </Providers>;
}
