/* eslint-disable react/prop-types */
export const MenuButton = ({ onClick }) => (
    <button className="text-black" onClick={onClick}>
        <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            viewBox='0 0 24 24'
            className='w-6 h-6'
        >
            <path d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
    </button>
);