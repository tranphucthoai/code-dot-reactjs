import axiosClient from "./axiosClient";

const strategyApi = {
  getAll(params) {
    const url = "/strategy";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/strategy/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/strategy";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/strategy";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/strategy/${id}`;
    return axiosClient.delete(url);
  },
};

export default strategyApi;
