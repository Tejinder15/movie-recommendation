import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //recommendation list
  var movieList = {
    Action: [
      {
        name: "Avengers: Endgame(2019)",
        rating: "5/5",
        link: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
      },
      {
        name: "Mission: Impossible - Fallout (2018)",
        rating: "4/5",
        link: "https://www.youtube.com/watch?v=wb49-oV0F78"
      }
    ],
    Comedy: [
      {
        name: "Toy Story 4 (2019)",
        rating: "4/5",
        link: "https://www.youtube.com/watch?v=wmiIUN-7qhE"
      },
      {
        name: "Lady Bird (2017)",
        rating: "5/5",
        link: "https://www.youtube.com/watch?v=cNi_HC839Wo"
      }
    ],

    Animated: [
      {
        name: "Spider-Man: Into the Spider-Verse (2018)",
        rating: "5/5",
        link: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ"
      },
      {
        name: "Inside Out (2015)",
        rating: "5/5",
        link: "https://www.youtube.com/watch?v=yRUAzGQ3nSY"
      }
    ],

    Drama: [
      {
        name: "Parasite (Gisaengchung) (2019)",
        rating: "5/5",
        link: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
      },
      {
        name: "Knives Out (2019)",
        rating: "3/5",
        link: "https://www.youtube.com/watch?v=sL-9Khv7wa4"
      }
    ]
  };

  //converting recommendation list keys to array
  var movieArray = Object.keys(movieList);

  //recommendation list
  var [recommendationList, setRecommendation] = useState([
    {
      name: "Select Genre",
      rating: "",
      link: "/"
    }
  ]);

  //
  return (
    <div className="App">
      <h1>What to Watch 🎬</h1>
      <h2>Movie Genre: </h2>
      {
        <div className="GenreList">
          {movieArray.map((i, index) => {
            return (
              <div
                className="GenreButton"
                onClick={() => {
                  setRecommendation(movieList[`${i}`]);
                  console.log(recommendationList);
                }}
                key={index}
              >{`${i}`}</div>
            );
          })}
        </div>
      }
      <ul style={{ paddingInlineStart: "0" }}>
        {recommendationList.map((item, index) => {
          return (
            <li className="listCard" key={index}>
              <div className="recommendationCard">
                <a href={`${item.link}`} target="_blank">
                  <h3 className="rHeading">{`${item.name}`}</h3>
                </a>
                <small className="rRating">{`${item.rating}`}</small>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
