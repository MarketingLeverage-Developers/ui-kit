import { Request } from '../types/request';
import apiClient from './apiClient';

export interface PostInquiryBody {
    name: string;
    firstPhone: string;
    middlePhone: string;
    lastPhone: string;
    carModel: string;
    carRentType: string;
    siteUrl: string;
    inquireLocation: string;
}

type PostInquiryRequest = Request<PostInquiryBody>;

export const postInquiry = async ({ body }: PostInquiryRequest) => {
    await apiClient.post('/client/inquire', { body });
};

// body: {
//             name,
//             firstPhone,
//             middlePhone,
//             lastPhone,
//             carModel,
//             siteUrl: 'chakada.com',
//             carRentType,
//             inquireLocation: '메인-하단',
//         },
