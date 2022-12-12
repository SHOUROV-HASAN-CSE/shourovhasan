import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">Shourov Hasan</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><a href='#projects'>Projects</a></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><a href='#contact'>Contact</a></li>
      
     
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://doc-04-as-docs.googleusercontent.com/docs/securesc/kmkgn3lg1uc2s0oravj3d33m5hqltt97/gdqju7uevv791gurmjv01uml3eadf7jn/1670688075000/01989290373181977711/01989290373181977711/1bwGiLoJzJiaPqvo5lKzsiXNXSTkHJlwr?e=download&ax=AEKYgyT5yVgXcBESiGnPyK7GgIOfEdk6UMojZZUEl8PG5oiKbT1TJQzOTNa97Kq_haCOIL17eoUajJAw5Br9PHl8t8Cvk2z0HOMYkQDCm4BmRZZKNM6TvGIRKivOPl7UBMLKLaWZJcsxq6wRPpwo_U9p67qB7Oy2sBRPh9-NKBLyCq1y4brrLernXICLTs8_yfPPnvV94JLevZ4x5qbtZ4R4h88aR_z-nK2eDOOme4JQUZO5PL5E35Fvb0HhzY7OcMjaXJKl5nqRs-PYMKZC2yNVu4Fjk3tFEVOH7_dsUU7kVWc8u802qNKY-k4ux-oBIA739pr7bmH7luqFtVVsPBzlIyNIw3wvQjebBLLLTCTTv3gUy9epxtPdxlKUW6I3TMDHYpUP2RrvEcYizcV9aAjnc7I4WccWiC6Zk3-GaRKUAbPuxYzZn5gPWSDeFgW6DXXaYD8nUwHGzaQxGd3LPwbpDnzdWPFig08AZ_DIscrEvjdohEBLzRlHkHUWq3THSIhb0jVY-4FMcmy_ThBol6qHifhTEjM52BOF-ix2z_ZXaZSE9bIw6D9ZckMgd4T4YRfS7bp4A5KU73uI2J32Ffkj1ttHXj5XGFUOrudBxaGAi-IsQdQhV03h1IRXA4Q1KXu3sUJ0RuuTqrHrKzAO3zOJhk01vZ85Ex3dq58tk6s-3ZjbwNQGrfoysMT9PMUcz2LL-ycMVtuDFEak-l6mjZgzP8OJcq5B-SKwoete_DbZ2dZ-fgsCUmNaBKKAyj04B3-Fc32Lleihwu8SAQB5txNg8tEQcKndyuQi3q8VCR5X3J8YPtAXkxfo8keGiH2WugrjPmsDq9M4Fu1R7rZPmtxGWe8aJlCW_watx6soPJkueBkyn-8E1s1Gc1Uba9GVkmiBFGWr&uuid=2337513a-b97a-4ffe-b63c-2ef9aefb5b62&authuser=0&nonce=u67uvd6caj1oo&user=01989290373181977711&hash=ku9euh1ubjodbq3lslucb7sll8lhr35n' className="btn btn-success">Resume</a>
  </div>
</div>
  );
};

export default Navbar;