import axiosClient from "./axiosClient";

const pricingApi = {
  getAll(params) {
    const url = "/pricing";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/pricing/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/pricing";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/pricing";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/pricing/${id}`;
    return axiosClient.delete(url);
  },
};

export default pricingApi;
