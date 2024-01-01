import { NextPageWithLayout } from "@custom-types/NextPageWithLayout";
import { createMainLayout } from "@layouts/MainLayout";
import { Fragment } from "react";

const IndexPage: NextPageWithLayout = () => {
    return (
        <Fragment>
            <h1>Index</h1>
        </Fragment>
    );
};

IndexPage.getLayout = createMainLayout();
export default IndexPage;
