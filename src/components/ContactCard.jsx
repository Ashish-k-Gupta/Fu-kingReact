import React from 'react';

const ContactCard = () => {
  const email = 'loads@truckinginc.com';

  return (
    <div className='flex-1 flex items-center justify-center bg-[#e2ecf1]'>
      <div className='flex flex-col items-start p-6'>
        <h5 className='text-3xl mb-4'>Contact Details</h5>
        <p className='text-lg'>9741 S Enos Ln</p>
        <p className='text-lg'>Bakersfield, CA 93311, USA</p>
        <p className='text-lg'>
          <a href={`mailto:${email}`} className="text-slate-600 hover:underline">
            {email}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
