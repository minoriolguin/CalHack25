import React from "react";
import PropTypes from "prop-types";

const ClassInfoCard = ({ icon, title, content }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] max-sm:p-5">
      <i className={`${icon} mb-2 text-xl text-black`} aria-hidden="true" />
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

ClassInfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ClassInfoCard;
