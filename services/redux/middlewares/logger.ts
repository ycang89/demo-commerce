import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import _get from 'lodash/get';
import { useRollbar } from "@rollbar/react";

export const logger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    const rollbar = useRollbar()
    if (isRejectedWithValue(action)) {
        const errorMessage = _get(action, 'payload.data');
        const statusCode: number = _get(action, 'payload.status');
        console.log('action', action)
        rollbar.info('messsage from middlleware')
        if (statusCode === 400) {
        }
        // if (errorMessage?.message) {
        //     rollbar.pushError(errorMessage.message);
        // }
    }
    return next(action);
};
