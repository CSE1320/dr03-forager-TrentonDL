import React from 'react';
import Pill from './Pill';

const PillList = ({ title, pills }) => {
    return (
        <div className="space-y-2 pt-{22px}">
            <h2 className="text-black font-nunito font-bold text-{24px} leading-normal">
                {title}
            </h2>
            <div className="text-black font-nunito font-bold text-{24px} leading-normal">
                {pills.map((pill, index) => (
                    <Pill key={index} text={pill.text} bgColor={pill.bgColor} />
                ))}
            </div>
        </div>
    );
};

export default PillList;