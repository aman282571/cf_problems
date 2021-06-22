import React, { useState, useEffect } from "react";
import { MdClear } from "react-icons/md";
function Showusers(props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [diffIncreaing, setDiff] = useState(true);
  const [solvecntIncreaing, setSolvedcnt] = useState(true);
  const [selectedTags, setSelectedtags] = useState([]);
  const [filterTags, setFiltertags] = useState("");
  const [status, setStatus] = useState("");
  const [showData, setData] = useState([]);
  useEffect(() => {
    //------------------filtedred questions on the basis of tags------------------
    let temp = props.problems;

    temp = temp.filter((problem) => {
      let flag = true;
      for (let i = 0; i < selectedTags.length; i++) {
        if (problem.tags.indexOf(selectedTags[i]) === -1) {
          flag = flag && false;
        } else {
          flag = flag && true;
        }
        if (flag === false) return false;
      }
      return flag;
    });

    //------------------filtedred questions on the basis of status------------------
    if (status !== "") {
      temp = temp.filter((problem) => {
        return problem.problemStatus === status;
      });
    }
    temp = temp.filter(
      (problem) => problem.name.toLowerCase().indexOf(search.trim()) !== -1
    );
    temp.sort((a, b) => {
      if (a.rating !== b.rating) return a.rating - b.rating;
      else return a.serialNumber - b.serialNumber;
    });
    setPage(1);
    setData((prev) => [...temp]);
  }, [selectedTags, status, search]);
  function removeTag(e) {
    let temp = [...selectedTags];
    temp.splice(
      selectedTags.indexOf(
        e.currentTarget.parentElement.innerText.trim().toLowerCase()
      ),
      1
    );
    setSelectedtags((prev) => temp);
  }
  function changeOrderByRating() {
    setDiff((prev) => !prev);
    if (diffIncreaing) {
      let temp = [...showData];
      temp.sort((a, b) => {
        if (a.rating !== b.rating) return b.rating - a.rating;
        else return a.serialNumber - b.serialNumber;
      });
      setData((prev) => [...temp]);
    } else {
      let temp = [...showData];
      temp.sort((a, b) => {
        if (a.rating !== b.rating) return a.rating - b.rating;
        else return a.serialNumber - b.serialNumber;
      });

      setData((prev) => [...temp]);
    }
  }
  function changeOrderBySolvedcnt() {
    setSolvedcnt((prev) => !prev);
    if (solvecntIncreaing) {
      let temp = [...showData];
      temp.sort((a, b) => {
        if (a.solvedCount !== b.solvedCount)
          return a.solvedCount - b.solvedCount;
        else return a.serialNumber - b.serialNumber;
      });
      setData((prev) => [...temp]);
    } else {
      let temp = [...showData];
      temp.sort((a, b) => {
        if (a.solvedCount !== b.solvedCount)
          return b.solvedCount - a.solvedCount;
        else return a.serialNumber - b.serialNumber;
      });
      setData((prev) => [...temp]);
    }
  }
  function showpageNums() {
    let temp = [];
    if (page > 1) {
      temp.push(
        <span id="diffrent" onClick={() => setPage((prev) => prev - 1)}>
          Prev.
        </span>
      );
    }
    if (Math.floor(showData.length / 100) > 1)
      for (
        let i = page;
        i < page + 5 && i <= Math.floor(showData.length / 100) + 1;
        i++
      ) {
        if (i === page)
          temp.push(
            <p id="highlight" onClick={() => setPage(i)}>
              {i}
            </p>
          );
        else
          temp.push(
            <p id="normal" onClick={() => setPage(i)}>
              {i}
            </p>
          );
      }
    if (page < Math.floor(showData.length / 100) + 1)
      temp.push(
        <span id="diffrent" onClick={() => setPage((prev) => prev + 1)}>
          Next
        </span>
      );
    return temp;
  }
  return (
    <div id="container">
      <h1>Codeforces Problems</h1>
      <ul className="dropdown">
        <li className="searchProblem">
          <input
            type="text"
            id="searchProblem"
            placeholder="Find problem"
            onChange={(e) => setSearch(e.target.value)}
          />
        </li>

        <li className="status">
          <select onChange={(e) => setStatus((prev) => e.target.value)}>
            <option value="">All</option>
            <option value="Todo">Todo</option>
            <option value="Tried">Tried</option>
            <option value="Solved">Solved</option>
          </select>
        </li>
        <li className="tags">
          Tags
          <ul id="dropbox" className="filterTags">
            <li>
              <input
                type="text"
                id="filterTags"
                onChange={(e) => {
                  return setFiltertags(e.target.value);
                }}
              />
            </li>
            {props.tags
              .filter((ele) => {
                return ele.indexOf(filterTags) !== -1;
              })
              .map((ele, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      setSelectedtags((prev) => {
                        if (
                          prev.indexOf(
                            e.target.innerText.trim().toLowerCase()
                          ) === -1
                        ) {
                          return [
                            ...prev,
                            e.target.innerText.trim().toLowerCase(),
                          ];
                        } else return prev;
                      });
                    }}
                  >
                    {ele}
                  </li>
                );
              })}
          </ul>
        </li>
      </ul>

      <div className="Showtags">
        {" "}
        {selectedTags.map((ele, index) => {
          return (
            <p id="tags" key={index}>
              {ele}
              <MdClear className="icon" onClick={(e) => removeTag(e)} />{" "}
            </p>
          );
        })}{" "}
      </div>
      <p id="results">{showData.length} results</p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="Serial">#</th>
              <th className="Problem">Problem</th>
              <th className="Status">Status</th>
              <th className="Rating" onClick={changeOrderByRating}>
                Rating
              </th>
              <th className="Solvedcnt" onClick={changeOrderBySolvedcnt}>
                Solved Count
              </th>
            </tr>
          </thead>
          <tbody>
            {showData
              .slice((page - 1) * 100, page * 100)
              .map((problem, index) => {
                return (
                  <tr key={index}>
                    <td id="number">{problem.serialNumber}</td>
                    <td>
                      <a
                        target="_blank"
                        href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}
                      >
                        {problem.name}
                      </a>
                    </td>
                    <td id="status">{problem.problemStatus}</td>
                    <td id="rating">{problem.rating}</td>
                    <td id="count">{problem.solvedCount}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {showData.length === 0 ? <p id="notFound">No matching problem</p> : ""}
      </div>
      <div id="pages">{showpageNums()}</div>
    </div>
  );
}

export default Showusers;
