import React from 'react';

const Card = ({ imageSrc, title, description, addressLink }) => {
  return (
    <section className='max-w-sm bg-white rounded-lg shadow dark:bg-customBlue'>
        <img className="rounded-t-lg" src={imageSrc} alt={title} />
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">{title}</h5>

        <p className="mb-3 font-normal text-white">{description}</p>
        <a href={addressLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-400 dark:focus:ring-blue-800">
          Address
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Card;
