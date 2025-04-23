import axiosInstance from '@/axios';
import { Car } from '../types/car';

// // 1) 추상화된 Request 인터페이스 (제네릭)
export interface Request<P = Record<string, unknown>, Q = Record<string, unknown>, B = Record<string, unknown>> {
    path: P;
    query: Q;
    body: B;
}

type CarGetRequest = Request<{}, { carTypeUuid: string; carBrandUuid: string }, {}>;
type CarGetResponse = Response<Car[]>;

export type Response<T> = {
    result: {
        code: number;
        message: string;
    };
    context: {
        // user: User;
        isLogin: boolean;
    };
    body: T;
    page?: number;
    size?: number;
    total?: number;
    totalPages?: number;
};

export default interface Color {
    uuid: string;
    name: string;
    path: string;
}

export const getCarAll = async (request: CarGetRequest): Promise<CarGetResponse> => {
    const { carTypeUuid, carBrandUuid } = request.query;

    const config = {
        url: `/client/car`,
        method: 'GET',
        params: { carTypeUuid, carBrandUuid },
    };

    try {
        const axiosResponse = await axiosInstance(config);

        const response = axiosResponse.data;

        return response;
    } catch (e) {
        throw e;
    }
};
