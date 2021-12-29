import axiosClient from "./axiosClient";

const servicesSaleApi = {
  getAll(params) {
    const url = "/services-sale";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/services-sale/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/services-sale";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/services-sale";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/services-sale/${id}`;
    return axiosClient.delete(url);
  },
};

export default servicesSaleApi;
