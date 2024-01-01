import { useAuthorization } from "@hooks/useAuthorization";
import { FC, Fragment, PropsWithChildren } from "react";

export const Authorized: FC<PropsWithChildren<{ onlyAnonymous?: boolean }>> = (props) => {
    const {
        authState: { isAuthorized, isLoading },
    } = useAuthorization(false);

    return (
        <Fragment>
            {!isLoading && (
                <Fragment>
                    {isAuthorized && !props.onlyAnonymous && props.children}
                    {!isAuthorized && props.onlyAnonymous && props.children}
                </Fragment>
            )}
        </Fragment>
    );
};
