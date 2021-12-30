import axiosClient from "./axiosClient";

const footerApi = {
  getAll(params) {
    const url = "/footer";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/footer/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/footer";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/footer";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/footer/${id}`;
    return axiosClient.delete(url);
  },
};

export default footerApi;
