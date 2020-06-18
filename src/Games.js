import React from "react";

const Games = props => {
  return (
    <div className="item">
      <div>
        <img
          className="ui medium circular image"
          src={props.imageUrl}
          alt={props.name}
        />
      </div>

      <div className="middle aligned content">
        <div className="description">
          <a>
            <i
              onClick={props.voteGame.bind(this, props.id)}
              className="large caret up icon"
            />
            {props.votes}
          </a>
          <p className="Title">{props.name}</p>
        </div>
        <div className="extra">
        <p className="club">Description: <span className="title">{props.description}</span></p>
        <p className="club">Développeur: <span className="title">{props.developper}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Games;