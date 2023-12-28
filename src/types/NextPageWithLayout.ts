import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

/**
 * Custom page type for layout support
 * See: https://nextjs.org/docs/basic-features/layouts
 */
export type NextPageWithLayout<T = {}> = NextPage<T> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
