import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Showproblems from "./components/Showproblems";
import Error from "./components/Error";
import "./App.css";

function Loadproblems(props) {
  //----------state for loading and error-------------------------------
  const [loading, setLoading] = useState({
    loadingState: true,
    errorState: false,
    errorMsg: null,
  });
  //------------------------state for problems--------------------
  const [problems, setproblems] = useState([]);
  const [Tags, setTags] = useState([]);

  useEffect(() => {
    //---------------------fetching the problems -----------------------
    fetch("https://codeforces.com/api/problemset.problems")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        //---------------------if Codeforces API return status="OK" then proceed -----------------------
        if (data.status === "OK") {
          //---------------------creating a map to map every problem to its data -----------------------
          let mp = new Map();
          let tags = new Map();
          data.result.problems.forEach((ele, index) => {
            //---------------------mapping every problem with key as="contestId,index of problem" -----------------------
            mp.set(`${ele.contestId}${ele.index}`, {
              ...ele,
              ...data.result.problemStatistics[index],
              problemStatus: "Todo", // adding problemStatus to see that this person had soled this problem or not
            });
            ele.tags.forEach((tag) => {
              if (!tags.has(tag)) {
                tags.set(tag, 1);
              }
            });
          });

          //---------------------fetching the submissions of loged in user -----------------------
          fetch(`https://codeforces.com/api/user.status?handle=${props.User}`)
            .then((Response) => {
              return Response.json();
            })
            .then((data) => {
              //---------------------if Codeforces API return status="OK" then proceed -----------------------
              if (data.status === "OK") {
                //---------------------looking into every submission-----------------------
                data.result.forEach((ele) => {
                  if (mp.has(`${ele.problem.contestId}${ele.problem.index}`)) {
                    if (typeof ele.verdict !== "undefined") {
                      //---------------------if user had Successfully submitted code for this problem  -----------------------
                      if (ele.verdict === "OK") {
                        let temp = mp.get(
                          `${ele.problem.contestId}${ele.problem.index}`
                        );
                        //---------------------marking problem status "OK" -----------------------
                        temp.problemStatus = "Solved";
                        mp.set(
                          `${ele.problem.contestId}${ele.problem.index}`,
                          temp
                        );
                      }
                    } else {
                      let temp = mp.get(
                        `${ele.problem.contestId}${data.problem.index}`
                      );
                      //---------------------if problemStatus is not OK but user had Tried the problem -----------------------
                      if (temp.problemStatus !== "Solved")
                        temp.problemStatus = "Tried";
                      mp.set(
                        `${ele.problem.contestId}${ele.problem.index}`,
                        temp
                      );
                    }
                  }
                });
                //--------------------extracting problems from map to array
                let arr = [];
                for (let [key, val] of mp) {
                  arr.push(val);
                }
                for (let i = 1; i <= arr.length; i++) {
                  if (typeof arr[i - 1].rating === "undefined")
                    arr[i - 1].rating = 10000;
                }
                arr.sort((a, b) => a.rating - b.rating);
                for (let i = 1; i <= arr.length; i++) {
                  arr[i - 1].serialNumber = i;
                }

                let tempTags = [];
                for (let [key, val] of tags) {
                  tempTags.push(key);
                }

                setproblems((prev) => {
                  return [...prev, ...arr];
                });
                setTags((prev) => {
                  return [...prev, ...tempTags];
                });
                setLoading((prev) => {
                  return {
                    ...prev,
                    loadingState: false,
                    errorState: false,
                    errorMsg: null,
                  };
                });
              } else {
                setLoading((prev) => {
                  return {
                    ...prev,
                    loadingState: false,
                    errorState: true,
                    errorMsg: "User Not found",
                  };
                });
              }
            })
            .catch((error) => {
              setLoading((prev) => {
                return {
                  ...prev,
                  loadingState: false,
                  errorState: true,
                  errorMsg: "Something went wrong",
                };
              });
            });
        } else {
          setLoading((prev) => {
            return {
              ...prev,
              loadingState: false,
              errorState: true,
              errorMsg: "Something went wrong",
            };
          });
        }
      })
      .catch((error) => {
        setLoading((prev) => {
          return {
            ...prev,
            loadingState: false,
            errorState: true,
            errorMsg: "Something went wrong",
          };
        });
      });
  }, [props.User]);

  return (
    <div>
      {loading.loadingState ? (
        <Loader />
      ) : loading.errorState ? (
        <Error error={loading.errorMsg} />
      ) : (
        <Showproblems problems={problems} tags={Tags} />
      )}
      {loading.loadingState ? (
        ""
      ) : loading.errorState ? (
        ""
      ) : (
        <p id="end">Built & designed with ❤️</p>
      )}
    </div>
  );
}

export default Loadproblems;
