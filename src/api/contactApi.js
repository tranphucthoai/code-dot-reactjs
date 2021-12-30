import axiosClient from "./axiosClient";

const contactApi = {
  getAll(params) {
    const url = "/contact";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/contact/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/contact";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/contact";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/contact/${id}`;
    return axiosClient.delete(url);
  },
};

export default contactApi;
