import { getToken } from '@/lib/user-auth';
import axios, { type AxiosInstance, type RawAxiosRequestHeaders } from 'axios';

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL;

const createAxiosInstance = (
	clientUrl: string,
	headers?: RawAxiosRequestHeaders,
): AxiosInstance => {
	const instance = axios.create({
		timeout: 10000,
		baseURL: `${BASE_URL}${clientUrl}`,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			...headers,
		},
	});

	instance.interceptors.request.use((config) => {
		const token = getToken();
		if (token) {
			config.headers.set('Authorization', `Bearer ${token}`);
		}

		return config;
	});

	return instance;
};

export default createAxiosInstance;
