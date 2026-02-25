import { BaseService } from '@/actions/api/base-service';
import type {
	AddPerfumeReviewDetails,
	PerfumeReviewWithUserDetails,
} from '../types';
import type { Perfume } from '@/types';

class PerfumeService extends BaseService {
	constructor() {
		super('/Perfume');
	}

	// get all perfumes
	async getAllPerfumes(): Promise<Perfume[]> {
		return this.get('');
	}

	// add new perfume review
	async addNewReview(review: AddPerfumeReviewDetails, perfumeId: string) {
		return this.post(`/${perfumeId}/addReview`, review);
	}

	// get featured perfumes

	async getFeaturedPerfumes(): Promise<Perfume[]> {
		return this.get('/featured');
	}

	// get perfume reviews and user details
	async getReviewsAndUserDetails(
		perfumeId: string,
	): Promise<PerfumeReviewWithUserDetails> {
		return this.get(`/${perfumeId}/reviewsWithUserDetails`);
	}
}

export default new PerfumeService();
