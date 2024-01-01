import { Authorized } from "@components/Authorized";
import { useAuthorization } from "@hooks/useAuthorization";
import { FC, PropsWithChildren, ReactElement } from "react";
import { MainLayout } from "./MainLayout";

export const AuthorizedLayout: FC<PropsWithChildren> = ({ children }) => {
    useAuthorization();

    return (
        <MainLayout>
            <Authorized>{children}</Authorized>
        </MainLayout>
    );
};

export function createAuthorizedLayout() {
    const getMainLayoutAuthorizedLayout = (page: ReactElement) => <AuthorizedLayout>{page}</AuthorizedLayout>;

    return getMainLayoutAuthorizedLayout;
}
