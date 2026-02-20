import { BaseService } from '@/actions/api/base-service';
import type {
	newUserRegistrationDto,
	newUserRegistrationResponseDto,
	User,
	UserLoginAuthDetails,
} from '.';
import type { UserLoginAuthResponse } from '@/types';

class AuthService extends BaseService {
	constructor() {
		super('/User');
	}
	// register new user
	async register(
		userRegistrationDetails: newUserRegistrationDto,
	): Promise<newUserRegistrationResponseDto> {
		return this.post('/register', userRegistrationDetails);
	}

	// handle user login
	async login(
		userLoginDetails: UserLoginAuthDetails,
	): Promise<UserLoginAuthResponse> {
		return await this.post('/login', userLoginDetails);
	}

	//get current user
	async getCurrentUser() {
		const res = await this.get<User>('/currentUser');
		return res;
	}
}

export default new AuthService();
