import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {Inter} from "next/font/google";

const inter = Inter({subsets:['latin']});

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
      <GoogleOAuthProvider clientId="152522132942-un17bf6m52hgi3thjjc5vnsie1d95tsb.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </div> ;
}
