import React from "react";
import PropTypes from "prop-types";
import { ExclamationCircleIcon as ExclamationPointSolid } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon as ExclamationPointOutline } from "@heroicons/react/24/outline";

function ExclamationPoint(props) {
  const { isFlagged, onClick } = props;
  return (
    <div role="switch" aria-checked={isFlagged} className="flex items-center">
      {isFlagged ? (
        <ExclamationPointSolid
          className="h-8 w-8 fill-sky-800"
          onClick={onClick}
        />
      ) : (
        <ExclamationPointOutline className="h-8 w-8" onClick={onClick} />
      )}
    </div>
  );
}

ExclamationPoint.propTypes = {
  isFlagged: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

ExclamationPoint.defaultProps = {
  onClick: () => {},
};

export default ExclamationPoint;
