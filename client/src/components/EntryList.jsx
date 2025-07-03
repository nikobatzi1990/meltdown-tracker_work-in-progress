import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ExclamationPoint from "./ExclamationPoint";
import Button from "./Button";

function EntryList(props) {
  const { entries, isTagClicked, selectedTag } = props;

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 m-5 gap-3">
      <h3 className="text-xxl m-5 text-center">Entries</h3>

      {isTagClicked && (
        <h4 className="text-lg m-5 text-center">
          Showing entries for: {selectedTag}
        </h4>
      )}

      {entries.length > 0 ? (
        entries.map((entry) => (
          <a
            key={entry.id}
            href={`/entry/${entry.id}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/entry/${entry.id}`);
            }}
          >
            <div className="grid grid-cols-4 gap-3 p-3 border-solid border-1 rounded-md cursor-pointer">
              {entry.flagged && (
                <ExclamationPoint
                  isFlagged
                  className="col-start-1 col-end-2 justify-self-end"
                />
              )}
              <span className="text-lg col-start-2 col-end-5">
                {entry.date} {entry.title}
              </span>
            </div>
          </a>
        ))
      ) : (
        <p className="text-center">No entries found.</p>
      )}
      <Button
        className="p-2 cursor-pointer border-none rounded-md bg-sky-900 text-white place-self-center"
        text="Add new entry"
        onClick={() => {
          navigate("/submission");
        }}
      />
    </div>
  );
}

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      flagged: PropTypes.bool,
    }),
  ).isRequired,
  isTagClicked: PropTypes.bool.isRequired,
  selectedTag: PropTypes.string.isRequired,
};

export default EntryList;
