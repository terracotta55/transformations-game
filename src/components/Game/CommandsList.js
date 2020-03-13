import React from "react";

const CommandsList = props => {
  return (
    <div className="list">
      <ol>
        {props.commands.map(command => (
          <li key={command.position}>
            <p>
              {command.command}
              <button
                className="button2"
                style={btnDelete}
                onClick={() => props.deleteCommand(command.position)}
              >
                X
              </button>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

const btnDelete = {
  fontSize: "20px",
  background: "red",
  border: "none",
  padding: "10px 15px",
  borderRadius: "25%",
  cursor: "pointer",
  float: "right"
};

export default CommandsList;
