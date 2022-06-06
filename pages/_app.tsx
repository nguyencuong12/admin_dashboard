import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import RouteGuard from "@components/authorized/authorized";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </Layout>
    </Provider>
  );
}

export default MyApp;
