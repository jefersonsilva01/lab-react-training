import React from "react";
import profiles from '../data/berlin.json';

const FaceBook = () => {
  return (
    profiles.map((item, index) => {
      const type = item.isStudent ? "Student" : "Teacher";
      return (
        <div key={index}
          style={
            {
              display: "flex",
              alignItems: "center",
              border: "2px solid #000",
              margin: "16px"
            }
          }>
          <img style={
            {
              width: "120px",
              height: "120px",
              "marginLeft": "16px"
            }
          } key={index} src={item.img} alt="cover" />
          <ul style={
            {
              listStyle: "none"
            }
          }>
            <li>
              <p style={
                {
                  margin: "8px 0",
                  textAlign: "left"
                }
              }><strong>First name: </strong>{item.firstName}</p>
            </li>
            <li>
              <p style={
                {
                  margin: "8px 0",
                  textAlign: "left"
                }
              }><strong>Last name: </strong>{item.lastName}</p>
            </li>
            <li>
              <p style={
                {
                  margin: "8px 0",
                  textAlign: "left"
                }
              }><strong>Country: </strong>{item.country}</p>
            </li>
            <li>
              <p style={
                {
                  margin: "8px 0",
                  textAlign: "left"
                }
              }><strong>Type: </strong>{type}</p>
            </li>
          </ul>
        </div>
      )
    })
  );
};

export default FaceBook;