import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  return (
    <article className="person">
      <img
        src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`}
        alt="person"
      />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="john" job="developer"></Person>
      <Person img="28" name="bob" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          possimus.
        </p>
      </Person>
      <Person img="15" name="nick" job="bot"></Person>
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
