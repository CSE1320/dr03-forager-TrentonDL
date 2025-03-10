'use client';
import { pills } from '@/data/development';
import PropTypes from 'prop-types';

export default function FilterOverlay({ activeFilters, onToggleFilter, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-[2em] w-[80%] max-w-[400px]">
                <h2 className="text-[1.5em] font-semibold mb-[1.5em] text-black">
                    Select Filters
                </h2>

                <div className="flex flex-wrap gap-[1em]">
                    {pills.map((pill, index) => (
                        <button
                            key={index}
                            onClick={() => onToggleFilter(index)}
                            className={`p-[0.75em] rounded-[1em] text-sm ${activeFilters.includes(index)
                                ? 'bg-[#579076] text-white'
                                : 'bg-gray-200 text-black'
                                }`}
                        >
                            {pill.text}
                        </button>
                    ))}
                </div>

                <button
                    onClick={onClose}
                    className="mt-[2em] bg-[#579076] text-white py-[0.75em] px-[1.5em] rounded-[1em] w-full"
                >
                    Done
                </button>
            </div>
        </div>
    );
}

FilterOverlay.propTypes = {
    activeFilters: PropTypes.arrayOf(PropTypes.number).isRequired,
    onToggleFilter: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};