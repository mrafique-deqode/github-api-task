import React, { useEffect } from "react";
import Input from "../common/Input.component";
import Button from "../common/Button.component";
import GithubDataService from "../services/github.service";

function View1() {
  const [repos, setRepos] = React.useState([]);
  const [pages, setPages] = React.useState(1);
  const [searchHandle, setSearchHandle] = React.useState("");


  useEffect(() => {}, [pages, repos]);

  const pagesLength = new Array(pages).fill(null).map((v, i) => i);

  const onChangeSearchTitle = (e) => {
    const handle = e.target.value;

    setSearchHandle(handle);
  };

  const handleSearchTitle = async (pn=1) => {
    try {
      const {data} = await GithubDataService.findByHandleView1(searchHandle, pn);
      setRepos(data.response);
      setPages(Math.ceil(data.repoLength/10))
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <Input
            searchHandle={searchHandle}
            onChangeSearchTitle={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <Button
              handleSearchTitle={handleSearchTitle}
            />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <h4>Repos List</h4>

        <ul className="list-group">
          {repos.length
            ? repos.map((repo, index) => (
              <li
                className="list-group-item "
                key={index}
              >
                <div>
                  Repo Name: {repo.name}<br />
                  Owner Name: {repo.owner && repo.owner.login}<br />
                  Description: {repo.description}<br />
                  Stars: {repo.stargazers_count}<br />
                  HyperLink: <a href={repo.html_url}>{repo.html_url}</a>
                </div>
              </li>
            )) 
            : "No repos found"}
        </ul>
      </div>
      <div>
      {pagesLength.map((e, i) => {
        return (
          <button
            className={'btn btn-primary'}
            onClick={(e) => {
              // setPageNumber(i);
              handleSearchTitle(i+1);
            }}
            key={i}
          >
            {i + 1}
          </button>
        );
      })}
      </div>
    </div>
  );
}

export default View1;
