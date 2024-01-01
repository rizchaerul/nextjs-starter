import { NextPageWithLayout } from "@custom-types/NextPageWithLayout";
import { createAuthorizedLayout } from "@layouts/AuthorizedLayout";
import { Fragment } from "react";

const HomePage: NextPageWithLayout = () => {
    return (
        <Fragment>
            <h1>Home</h1>
        </Fragment>
    );
};

HomePage.getLayout = createAuthorizedLayout();
export default HomePage;
