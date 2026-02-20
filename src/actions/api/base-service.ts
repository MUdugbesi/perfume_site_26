import createAxiosInstance from './axios-instance';
import { AxiosError, type AxiosInstance, type AxiosResponse } from 'axios';

export abstract class BaseService {
	protected clientUrl: string;
	protected apiInstance: AxiosInstance;

	constructor(url: string, headers?: Record<string, string>) {
		this.clientUrl = url;
		this.apiInstance = createAxiosInstance(this.clientUrl, headers);
	}

	protected async handleRequest<TData>(
		request: Promise<AxiosResponse<TData>>,
	): Promise<TData> {
		try {
			const response = await request;
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data?.error?.message || error.message);
			}
			throw new Error('Something went wrong while processing your request');
		}
	}

	public async get<TData>(
		url: string,
		params?: Record<string, unknown>,
	): Promise<TData> {
		return this.handleRequest(this.apiInstance.get(url, { params }));
	}

	public async post<TResponse, TData>(
		url: string,
		data?: TData,
		params?: Record<string, unknown>,
	): Promise<TResponse> {
		return this.handleRequest(this.apiInstance.post(url, data, { params }));
	}

	public async put<TData>(
		url: string,
		data?: TData,
		params?: Record<string, unknown>,
	): Promise<TData> {
		return this.handleRequest(this.apiInstance.put(url, data, { params }));
	}

	public async delete<TData>(
		url: string,
		params?: Record<string, unknown>,
	): Promise<TData> {
		return this.handleRequest(this.apiInstance.delete(url, { params }));
	}
}
