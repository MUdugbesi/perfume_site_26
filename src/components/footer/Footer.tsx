import { Link } from 'react-router';
import { MdOutlineFacebook } from 'react-icons/md';
import { IoLogoInstagram } from 'react-icons/io';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const FooterLinks = [
	{
		title: 'Product',
		links: [
			{ name: 'New', link: '' },
			{ name: 'Popular', link: '' },
			{ name: 'Blog', link: '' },
			{ name: 'Upcoming', link: '' },
		],
	},
	{
		title: 'Company',
		links: [
			{ name: 'About us', link: '' },
			{ name: 'Home', link: '' },
			{ name: 'FAQs', link: '' },
			{ name: 'Upcoming', link: '' },
		],
	},
	{
		title: 'Customer Service',
		links: [
			{ name: 'Contact', link: '' },
			{ name: 'Terms and conditions', link: '' },
			{ name: 'Privacy policy', link: '' },
			{ name: 'Return Policy', link: '' },
			{ name: 'Shipping policy', link: '' },
		],
	},
];

const Footer = () => {
	return (
		<div className='w-full h-[40vh] bg-black mt-30 flex items-center'>
			<div className='w-[60%] mx-auto h-[30vh] flex mt-20'>
				<div className='w-full h-full grid grid-cols-3 text-secondary'>
					{FooterLinks.map((footer) => (
						<>
							<ul className='font-lato'>
								<li className='font-extrabold mb-5'>{footer.title}</li>
								{footer.links.map((link) => (
									<li className='pb-2'>
										<Link
											to={link.link}
											className='font-robotoCondensed text-white/45 hover:text-white'
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</>
					))}
				</div>

				<div className='text-secondary'>
					<p className='font-extrabold mb-5'>Get in touch</p>
					<p className='font-robotoCondensed text-white/45 hover:text-white'>
						You'll find your next level product you prefer
					</p>

					<div className='flex gap-2 mt-10'>
						<MdOutlineFacebook
							size={22}
							className='text-white/45 hover:text-white'
						/>
						<IoLogoInstagram
							size={22}
							className='text-white/45 hover:text-white'
						/>
						<FaXTwitter size={22} className='text-white/45 hover:text-white' />
						<FaLinkedin size={22} className='text-white/45 hover:text-white' />
					</div>
					<p className='text-white mt-5 text-sm'>&copy; 2026, All right reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
