import { NextPageWithLayout } from "@custom-types/NextPageWithLayout";
import { createAuthorizeLayout } from "@layouts/MainLayout";
import Link from "next/link";
import { Fragment } from "react";

const IndexPage: NextPageWithLayout = () => {
    return (
        <Fragment>
            <h1>Index</h1>

            <Link href="/home">Home</Link>
        </Fragment>
    );
};

IndexPage.getLayout = createAuthorizeLayout();
export default IndexPage;
