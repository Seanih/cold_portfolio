import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
	return (
		<header className='bg-red-600'>
			<div className='container mx-auto flex justify-around'>
				<nav className='flex'>
					<NavLink
						to='/'
						exact
						activeClassName='text-gray-100 bg-red-800'
						className='inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-gray-700 text-4xl font-bold cursive tracking-widest'
					>
						Sean
					</NavLink>
					<NavLink
						to='/post'
						activeClassName='text-white bg-red-800'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-yellow-300'
					>
						blog posts
					</NavLink>
					<NavLink
						to='/project'
						activeClassName='text-white bg-red-800'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-yellow-300'
					>
						projects
					</NavLink>
					<NavLink
						to='/about'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-yellow-300'
						activeClassName='text-white bg-red-800'
					>
						about me
					</NavLink>
				</nav>
				{/* social media links */}
				<div className='inline-flex py-3 px-3 my-6'>
					<SocialIcon
						url='https://www.youtube.com/channel/UCI_PBtZ499c6xTL4E8YT4_w'
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url='https://twitter.com/home?lang=en'
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					{/* <SocialIcon
						url=''
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/> */}
				</div>
			</div>
		</header>
	);
};

export default NavBar;
