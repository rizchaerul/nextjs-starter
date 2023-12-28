import { NextPageWithLayout } from "@custom-types/NextPageWithLayout";
import { createAuthorizeLayout } from "@layouts/MainLayout";
import Link from "next/link";
import { Fragment } from "react";

const HomePage: NextPageWithLayout = () => {
    return (
        <Fragment>
            <h1>Home</h1>

            <Link href="/">Index</Link>
        </Fragment>
    );
};

HomePage.getLayout = createAuthorizeLayout();
export default HomePage;
