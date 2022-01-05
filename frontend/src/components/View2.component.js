import React from "react";
import Button from "../common/Button.component";
import Input from "../common/Input.component";
import GithubDataService from "../services/github.service";

function View2() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [searchHandle, setSearchHandle] = React.useState("");

  const onChangeSearchTitle = (e) => {
    const handle = e.target.value;

    setSearchHandle(handle);
  };

  const handleSearchTitle = async () => {
    try {
      const response = await GithubDataService.findByHandleView2(searchHandle)
      setUserInfo(response.data);
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
        <h4>User Information</h4>
        {userInfo
          ? <div>
            Image: <a href={userInfo.html_url}><img src={userInfo.avatar_url} width={64} height={64} /></a><br />
            User Name: {userInfo.name}<br />
            Followers: {userInfo.followers}<br />
            Following Count: {userInfo.following}<br />
            Repos Count: {userInfo.public_repos}<br />
            Member Since: {new Date(userInfo.created_at).toDateString()}
          </div>
          : <div>No User Found</div>
        }
      </div>
    </div>
  );
}

export default View2;
