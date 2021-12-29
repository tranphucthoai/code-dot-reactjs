import axiosClient from "./axiosClient";

const heroApi = {
  getAll(params) {
    const url = "/hero";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/hero/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/hero";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/hero";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/hero/${id}`;
    return axiosClient.delete(url);
  },
};

export default heroApi;
