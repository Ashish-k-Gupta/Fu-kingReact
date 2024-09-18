import React from 'react';

const ContactCard = () => {
  const email = 'loads@manntransinc.com';

  return (
    <div className='flex-1 flex flex-col items-center justify-center text-white p-6 bg-blue-500 rounded-lg shadow-lg'>
      <h5 className='text-4xl mb-4'>Contact Details</h5>
      <p className='text-lg'>9741 S Enos Ln</p>
      <p className='text-lg'>Bakersfield, CA 93311, USA</p>
      <p className='text-lg'>
        <a href={`mailto:${email}`} className="text-blue-200 hover:underline">
          {email}
        </a>
      </p>
      <p className='text-sm'>Call us for more info!</p>
    </div>
  );
}

export default ContactCard;
