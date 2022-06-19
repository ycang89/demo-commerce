import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import _get from 'lodash/get';

export const logger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const errorMessage = _get(action, 'payload.data');
        const statusCode: number = _get(action, 'payload.status');
        if (statusCode === 400) {
        }
        // if (errorMessage?.message) {
        //     rollbar.pushError(errorMessage.message);
        // }
    }
    return next(action);
};
