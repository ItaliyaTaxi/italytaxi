'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./NavbarContent'), { ssr: false });

export default Navbar;
