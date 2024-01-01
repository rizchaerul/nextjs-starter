import { Authorized } from "@components/Authorized";
import { login, logout } from "@helpers/OpenIdConntect";
import Head from "next/head";
import Link from "next/link";
import { FC, Fragment, PropsWithChildren, ReactElement } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <title>Nextjs Starter</title>
            </Head>

            <div className="flex gap-5">
                <Link href="/home">Home (Authorized)</Link>
                <Link href="/">Index</Link>

                <Authorized>
                    <button onClick={logout}>Logout</button>
                </Authorized>

                <Authorized onlyAnonymous>
                    <button onClick={login}>Login</button>
                </Authorized>
            </div>

            {children}
        </Fragment>
    );
};

export function createMainLayout() {
    const getMainLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

    return getMainLayout;
}
