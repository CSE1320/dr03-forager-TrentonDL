import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import './SimilarMatches.css';

const SimilarMatches = ({ matches }) => {
  return (
    <div className="similar-matches">
      <h2>Similar Matches</h2>
      <div className="matches-grid">
        {matches.map((match, index) => (
          <Postcard
            key={index}
            image={match.image}
            name={match.name}
            percentage={match.percentage}
            isToxic={match.isToxic}
            showPercentage={true}
          />
        ))}
      </div>
    </div>
  );
};

SimilarMatches.propTypes = {
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      isToxic: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default SimilarMatches;