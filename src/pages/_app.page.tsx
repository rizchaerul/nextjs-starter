import { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";

import "@styles/site.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);

    return <Fragment>{isReady && <Component {...pageProps} />}</Fragment>;
}
