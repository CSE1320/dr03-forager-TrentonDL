import React from 'react';
import PropTypes from 'prop-types';

const PostCard = ({ image, name, alt, percentage, isToxic, showPercentage }) => {
    return (
        <li className="postcard mx-[2%] flex flex-col items-center w-30 h-48">
            <div className="polaroid-card relative w-24 h-32 bg-white shadow-[3px_3px_3px_2.5px_rgba(0,0,0,0.1)]">
                <div className="polaroid flex flex-wrap justify-center">
                    <img src={image} alt={alt} className="post-card-image" />
                    <div className="post-card-info">
                        {showPercentage && (
                            <div className={`post-card-percentage ${isToxic ? 'toxic' : ''}`}>
                            {percentage}%
                        </div>
                        )}
                        {isToxic ? (
                            <div className="warning-container absolute left-1.5 top-[5px]">
                            <img
                                className="warning"
                                src="/icons/warning_icon.png"
                                alt="warning icon"
                            />
                            </div>
                        ): null}
                    </div>
                    
                </div>
            </div>
            <div className="title mb-0.5 text-[#203B5F] text-center font-nunito text-[16px] font-semibold leading-normal">
                <p className="mt-2 text-sm md:text-base lg:text-lg truncate">
                    {name}
                </p>
            </div>
        </li>
    );
};

PostCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  isToxic: PropTypes.bool.isRequired,
  showPercentage: PropTypes.bool,
};

PostCard.defaultProps = {
  percentage: 0,
  showPercentage: false,
};

export default PostCard;