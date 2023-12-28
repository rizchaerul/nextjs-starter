import { AppPropsWithLayout } from "@custom-types/AppPropsWithLayout";
import { Fragment, useEffect, useState } from "react";

import "@styles/site.scss";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const [isReady, setIsReady] = useState(false);
    const getLayout = Component.getLayout ?? ((page) => page);

    useEffect(() => {
        setIsReady(true);
    }, []);

    return <Fragment>{isReady && getLayout(<Component {...pageProps} />)}</Fragment>;
}
