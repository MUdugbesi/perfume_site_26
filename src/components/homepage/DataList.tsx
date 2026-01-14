import Perfume1 from '@/assets/perfume1.jpg';
import Perfume2 from '@/assets/perfume2.jpg';
import Perfume3 from '@/assets/perfume3.jpg';
import Perfume4 from '@/assets/perfume4.jpg';
import Perfume5 from '@/assets/perfume5.jpg';
import Perfume6 from '@/assets/perfume6.jpg';
import Perfume7 from '@/assets/perfume7.jpg';
import Perfume8 from '@/assets/perfume8.jpg';
import Perfume9 from '@/assets/perfume9.jpg';
import { Mails, PhoneIcon, TruckIcon } from 'lucide-react';

export const PerfumeMiniList = [
	{
		name: 'Coco Noir',
		description: 'Explore the Coco Noir perfume',
		image: Perfume9,
		price: 119.9,
		id: 0,
		rating: 5,
	},
	{
		name: 'Coo Nor',
		description: 'Explore the Coco Noir perfume',
		image: Perfume8,
		price: 109.9,
		id: 1,
		rating: 4,
	},
	{
		name: 'Coc Noir',
		description: 'Explore the Coco Noir perfume',
		image: Perfume7,
		price: 129.9,
		id: 2,
		rating: 4,
	},
];
export const PerfumeList = [
	{
		name: 'Coco Noir',
		image: Perfume9,
		price: 119.9,
		id: 0,
		rating: 5,
	},
	{
		name: 'Coo Nor Chanel',
		image: Perfume2,
		price: 109.9,
		id: 1,
		rating: 4,
	},
	{
		name: 'Coc Noir',
		image: Perfume1,
		price: 129.9,
		id: 2,
		rating: 4,
	},
	{
		name: 'Coc Noir',
		image: Perfume5,
		price: 129.9,
		id: 3,
		rating: 5,
	},
	{
		name: 'Coc Noir',
		image: Perfume6,
		price: 129.9,
		id: 3,
		rating: 5,
	},
	{
		name: 'Coc Noir',
		image: Perfume4,
		price: 129.9,
		id: 3,
		rating: 5,
	},
	{
		name: 'Coc Noir',
		image: Perfume3,
		price: 129.9,
		id: 3,
		rating: 5,
	},
	{
		name: 'Coc Noir',
		image: Perfume8,
		price: 129.9,
		id: 3,
		rating: 5,
	},
	{
		name: 'Coc Noir',
		image: Perfume7,
		price: 129.9,
		id: 3,
		rating: 5,
	},
];

export const ReviewList = [
	{
		imageLink: 'https://github.com/shadcn.png',
		name: 'Marvelous',
		review: 'Excellent!!',
		rating: 5,
	},
	{
		imageLink: 'https://github.com/shadcn.png',
		name: 'Madison',
		review: 'Excellent',
		rating: 5,
	},
	{
		imageLink: 'https://github.com/shadcn.png',
		name: 'Yolanda',
		review: 'Beautiful',
		rating: 5,
	},
];

export const ServiceInfoList = [
	{
		image: <TruckIcon className='text-amber-500' size={32} />,
		title: 'Free Shipping',
		description: 'Free Shipping And Return',
	},
	{
		image: <PhoneIcon className='text-green-500' size={32} />,
		title: 'Customer Service',
		description: 'We are available Monday - Friday to answer your questions',
	},
	{
		image: <TruckIcon className='text-amber-500' size={32} />,
		title: 'Secure Payments',
		description: 'Your payment information is processed securely',
	},
	{
		image: <Mails className='text-purple-700' size={32} />,
		title: 'Contact Us',
		description: 'Need to contact us',
		color: 'white',
	},
];

export const TestimonialList = [
	{
		imageLink: 'https://github.com/shadcn.png',
		name: 'Yolanda Nyati',
		review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
				dolores impedit iure voluptate dolor fugit necessitatibus nulla,
				praesentium magnam, similique excepturi sapiente at iste dolorum minus
				asperiores ab quod nemo.`,
		ratings: 5,
		role: 'Customer',
		id: 1,
	},
	{
		imageLink: 'https://github.com/shadcn.png',
		name: 'Marvelous Udugbesi',
		review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
				dolores impedit iure voluptate dolor fugit necessitatibus nulla,
				praesentium magnam, similique excepturi sapiente at iste dolorum minus
				asperiores ab quod nemo.`,
		ratings: 5,
		role: 'Customer',
		id: 2,
	},
	{
		imageLink: 'https://github.com/shadcn.png',
		name: 'Henry Ayorinde',
		review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
				dolores impedit iure voluptate dolor fugit necessitatibus nulla,
				praesentium magnam, similique excepturi sapiente at iste dolorum minus
				asperiores ab quod nemo.`,
		ratings: 4,
		role: 'Customer',
		id: 3,
	},
	{
		imageLink: 'https://github.com/shadcn.png',
		name: 'Phadie Nyati',
		review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
				dolores impedit iure voluptate dolor fugit necessitatibus nulla,
				praesentium magnam, similique excepturi sapiente at iste dolorum minus
				asperiores ab quod nemo.`,
		ratings: 5,
		role: 'Customer',
		id: 4,
	},
];
