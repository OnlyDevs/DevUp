import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import ExploreCard from "./ExploreCard";
import { API_URL } from "../env";
import * as actions from "../actions/actions";

function mapStateToProps(state) {
  return {
    explore: state.onlyDevs.explore,
  };
}

function ExploreContent(props) {
  //list of all people that user has swiped on
  const exploreArr = props.explore;
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const id = useSelector((state) => state.onlyDevs.id);
  const dispatch = useDispatch();

  //When id changes, make a fetch req to explore passing in userId in query
  useEffect(() => {
    if (id) {
      const url = API_URL + `/users/explore?userId=${id}`; //API_URL = localhost:3000
      //grabs all people
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch(actions.updateExplore(data.users));
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  //POST req to /like, called when user likes a card in explore
  const like = (otherId) => {
    return fetch(API_URL + `/matches/like`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        selfId: id,
        otherId,
      }),
    });
  };

  function consumePromise() {
    console.log("consume", index);

    if (exploreArr[index]) {
      like(exploreArr[index].id);
    }

    if (exploreArr[index + 1] === undefined) {
      setIsExiting(true);

      setTimeout(() => {
        setIsExiting(false);
        setIndex(0);
      }, 1000);
    } else {
      setIsExiting(true);

      setTimeout(() => {
        setIsExiting(false);

        setIndex(index + 1);
      }, 1000);
    }
  }

  function rejectPromise() {
    console.log("reject", index);
    if (exploreArr[index + 1] === undefined) {
      setIsExiting(true);

      setTimeout(() => {
        setIsExiting(false);
        setIndex(0);
      }, 1000);
    } else {
      setIsExiting(true);

      setTimeout(() => {
        setIsExiting(false);

        setIndex(index + 1);
      }, 1000);
    }
  }

  return (
    <div>
      <center>
        <h1 className="textPopIn">Look for some lonely devs.</h1>
      </center>
      <div
        id="exploreContentParent"
        key={index}
        className={`flip ${isExiting ? "exit" : ""}`}
      >
        {exploreArr.length ? (
          <ExploreCard
            username={exploreArr[index].username}
            profilePic={exploreArr[index].profileimgurl}
            bio={exploreArr[index].bio}
            languages={exploreArr[index].languages}
            current_project={exploreArr[index].languages}
          ></ExploreCard>
        ) : (
          <p>nothing here...</p>
        )}
      </div>
      <div>
        <button
          className="promiseBtn fulfill"
          style={{
            float: "left",
            backgroundColor: "rgb(52, 173, 42)",
            marginTop: "30px",
            marginLeft: "20%",
          }}
          onClick={consumePromise}
        >
          Fulfill Promise
        </button>
        <button
          className="promiseBtn reject"
          style={{
            float: "right",
            backgroundColor: "rgb(255, 32, 32 )",
            marginTop: "30px",
            marginRight: "20%",
          }}
          onClick={rejectPromise}
        >
          Reject Promise
        </button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(ExploreContent);
