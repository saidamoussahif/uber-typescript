import React from "react";
import { useRouter } from 'next/router'

const Navbar: React.FC = () => {
  
  const router = useRouter()
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX///8AAADR0dH09PT4+Pj7+/t1dXXh4eFpaWkgICDo6OhfX1/w8PDX19esrKxGRkaKioomJibExMSAgIBaWlpubm4tLS1NTU2+vr4aGhqVlZUSEhK4uLg1NTXKyspBQUGjo6NtYPhiAAAEcklEQVRoge2X24KkKAyGCSrgGQRFUZT3f8pJrJrZvpjtqe7dqSu+C0Wx+JOQAMVYJpPJZDKZTCaTyWQymUwmk8lkMpkX4WE0Sx3bQb5befKj0EErMRqj+ncqF3NM2m9bjDXsG0B4o/QihmUXQmnrZoXaML9NGoKFWdzelpMWCsXFm7RbK9BpA8PjUTqL4ukt0odJIA4moX7mmKpRfH9HwhVXgjlhYzt9asqyCQBj+56on9FGUWED2Gk2r8a5Xtd5h635+9rC1mrCu9zEVm+LYAPmnPYAx1+XLi/7CK/dazv0yoQWHT71Mv597a6dDRXXACP0ekgQx5KxhvNp0MJZzLhu0EqvfxiGV9/QlqN3tmu0n82A6X2kxReY+0A1LqjUVoCoFehPR1nhO9khY2xbg2EPezHjanrEjTaTBeBiLIDsAdoCo7KVnwxSxfE7fnfjGB1Eb8Pi+mGQSwzoYoNu4y1dJVbbwIoN3P31TwPK6mOj88+wPF+X/3z4KeW47PPJygFMFK3CemNuQj8BOOafKA2Ar9ikKaanMo6WnKOtRyoNNqn6OjucGvCqotfXKq2ex0aYlzJV1KBQhhV7XccrgrUzSAz5yLqyrMqIAxvqZ5WCLeHryoND29DsFq4VO7Ee67BWDhZ83aAlOxrsXtHGtPJ3xE6/hnoP05lcDw/Q2XQ3Blr/8PkAVSywlB220aytKAAk7j2WuusCxyooZLgPp1e0aUxxR2jpBtXd72g9HzhX5aONSNbe2/rZ4X2l5GeOTJpgObG7p27NPHgWaS+wn5fFL9BQI05SmZ+BKncA9at/rWlbQzVDhmEcIk4UKPTxKtEykagkyNs6gJFkyRdWJXTgEisNeM9rd6zP34d+on2VhkvxTnzWLeRtUwN/HG8Azjsg1F1DK5l6caqfdOhmPWtNkWVFEhOFGX3sofEW+wscOD0Sv5vu+AdQ/R3pBEpSg9Ol6AqGiQDnF7RZg86g60KrENy883iHnEPbbeQr6l39HXINFFvsiRWG3BS459PUw32pmK0p9rH7ijYr6JgEWGQbhiCSE+1JC+wJpu+mHS5J3olrv6dTwChvv2dY5BFoGaJw2MtIqjB3QhSJv6gse5q0n1wcjHdurHFBDVhHcCXuSGK30pNJe+gd0MRsWnqNJw8dCk0WNKGft/loEp75nE0Hb/51eSsayY+krdXDcfaTe0jvNVbXOZ2cc7snvJ484FqxYuswYCa8J3ze6MVgcDb4GrQ/+MQHMeqeN8nqtPZ9L/m69r9f5otzPVCywd5mRQtmNds0DEHjAvO0gi7RYzLgoQIut+z4xwUuv8OOwDLCBxYPNoW5xd1BuFbbdL62pPP+PI6ghaejeX0pEVIajmlC26Vsmq4inh9XVVlVXdM0Uva4yU/HkFLQs7vIYuOFtjoEjf80zNLaNH2Wd8UahPMKfzBMXHbf2Qk/jtZg6hwDioe1wwPIEaxvRVib349blv9R709UpTyP9Q0Hz0wmk8lkMplMJpPJZDKZTCaTyfw//ADM+UZp4SAE5QAAAABJRU5ErkJggg=="
            className="h-40 mr-3"
            alt="Logo"
          />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Get started</span>
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li
            onClick={() => router.push('/dashboard')}
            >
              <a href="/" className="block py-2 pl-3 pr-4 ">
                <span className="block text-sm font-medium">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg"
              >
                <span className="block text-sm font-medium">Signin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
