import axiosClient from "./axiosClient";

const clientsApi = {
  getAll(params) {
    const url = "/clients";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/clients/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/clients";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/clients";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/clients/${id}`;
    return axiosClient.delete(url);
  },
};

export default clientsApi;
