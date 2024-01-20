// pages/cv.tsx

import React from 'react';

const CVPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#232332]">
      <iframe
        src="/documents/cv.pdf"
        className="lg:w-full lg:h-full"
      ></iframe>
    </div>
  );
};

export default CVPage;
