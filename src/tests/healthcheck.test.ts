import axios, { type AxiosResponse } from 'axios';

const apiCall = async (): Promise<
    AxiosResponse<{ statusCode: number; data: Record<string, unknown> }>
> => {
    const response = await axios.get('http://localhost:3001/');
    return response;
};

describe('check if the service is running', () => {
    it('should return status ok', async () => {
        const response = await apiCall();
        expect(response.data).toStrictEqual({
            status: 'ok',
        });
    });
});
