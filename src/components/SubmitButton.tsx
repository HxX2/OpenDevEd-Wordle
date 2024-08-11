import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <div className='w-full flex justify-center'>
      <button className='px-8 py-3 bg-orange rounded-[16px]' onClick={onClick}>
        <p className='text-2xl text-white font-baloo font-bold'>Submit</p>
      </button>
    </div>
  );
};

export default SubmitButton;
