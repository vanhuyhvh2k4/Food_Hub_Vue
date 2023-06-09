import * as request from '@/utils/httpRequest.js';

export const sendMail = async (value) => {
    try {
        const res = await request.post('auth/password', value);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}