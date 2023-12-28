import Head from "next/head";
import { FC, Fragment, PropsWithChildren, ReactElement } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <title>Nextjs Starter</title>
            </Head>

            {children}
        </Fragment>
    );
};

export function createAuthorizeLayout() {
    const getAuthorizedLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

    return getAuthorizedLayout;
}
