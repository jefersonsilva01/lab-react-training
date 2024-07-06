import React, { useState } from "react";
import profiles from '../data/berlin.json';
import Rating from './Rating';
import "./FaceBook.css"

const FaceBook = () => {
  profiles.forEach(item => {
    item.visibility = "hidden";
  });

  const [profile, setProfile] = useState(profiles);

  const updateColor = country => {
    const newProfiles = profile.map(item => {
      if (item.country === country) {
        item.backgroundColor = "#0000bb";
        return item;
      } else {
        item.backgroundColor = "#fff";
        return item;
      }
    })
    setProfile(newProfiles);
  };

  const showInfo = id => {
    const newProfiles = profiles.map((item, index) => {
      if (index === id) {
        const newItem = { ...item }
        newItem.visibility = "visible";
        return newItem;
      } else {
        return item;
      }
    });
    setProfile(newProfiles);
  };

  const countries = []
  profile.forEach(item => {
    if (!countries.includes(item.country)) countries.push(item.country)
  });

  const buttonsCountries = countries.map((item, index) => {
    return <button
      key={index}
      onClick={() => updateColor(item)}
      style={
        {
          padding: "16px",
          border: "solid 1px #000",
          margin: "0 2px"
        }
      }>
      {item}
    </button>
  });

  const cards = profile.map((item, index) => {
    const type = item.isStudent ? 'Stundent' : 'Teacher';
    return (
      <div key={index} style={
        {
          display: "flex",
          alignItems: "center",
          padding: "16px",
          border: "solid 2px #000",
          margin: "16px",
          backgroundColor: item.backgroundColor
        }
      }>
        <img src={item.img} alt="cover"
          onClick={() => showInfo(index)}
          style={
            {
              width: "120px",
              height: "120px"
            }
          } />
        <ul style={
          {
            listStyle: "none",
            textAlign: "left",
            visibility: item.visibility
          }
        }>
          <li>
            <p style={{ margin: "8px 0" }}><strong>First name: </strong>{item.firstName}</p>
          </li>
          <li>
            <p style={{ margin: "8px 0" }}><strong>Last name: </strong>{item.lastName}</p>
          </li>
          <li>
            <p style={{ margin: "8px 0" }}><strong>Country: </strong>{item.country}</p>
          </li>
          <li>
            <p style={{ margin: "8px 0" }}><strong>Type: </strong>{type}</p>
          </li>
          <li>
            <Rating>3.5</Rating>
          </li>
        </ul>
      </div>
    )
  });

  return (
    <div>
      {buttonsCountries}
      <input
        placeholder="&#128269; Search"
        type="search"
        style={
          {
            fontSize: "1.5em",
            display: "block",
            margin: "16px auto",
            width: "90%",
            height: "40px",
            padding: "0 8px"
          }
        } />
      {cards}
    </div>
  );
};

export default FaceBook;