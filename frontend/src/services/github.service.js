import http from "../http-common";

class GithubDataService {

  findByHandleView1(handle, pn) {
    return http.get(`/github/view1?handle=${handle}&page=${pn}`);
  }

  findByHandleView2(handle) {
    return http.get(`/github/view2?handle=${handle}`);
  }
}

export default new GithubDataService();
