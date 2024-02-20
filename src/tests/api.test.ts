import axios, { type AxiosResponse } from 'axios';

const apiCall = async (
    name: string
): Promise<
    AxiosResponse<{ statusCode: number; data: Record<string, unknown> }>
> => {
    const response = await axios.get('http://localhost:3001/api', {
        data: { name },
    });
    return response;
};

describe('check if the service is running', () => {
    it('should return the message with the passed name param', async () => {
        const response = await apiCall('John');
        expect(response.data).toStrictEqual({
            message: 'Hello, John',
        });
    });
});
