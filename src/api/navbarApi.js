import axiosClient from "./axiosClient";

const navbarApi = {
  getAll(params) {
    const url = "/navbar";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/navbar/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/navbar";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/navbar";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/navbar/${id}`;
    return axiosClient.delete(url);
  },
};

export default navbarApi;
