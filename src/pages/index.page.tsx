import { NextPageWithLayout } from "@custom-types/NextPageWithLayout";
import { createMainLayout } from "@layouts/MainLayout";
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

IndexPage.getLayout = createMainLayout();
export default IndexPage;
