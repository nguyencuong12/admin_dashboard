import instanceAxios from '../axios';
let url = '/product';
export const ProductAPI = {
  _getListProduct: async (page: number) => {
    return await instanceAxios({
      method: 'GET',
      url: url,
      params: {
        currentPage: page,
      },
      //   headers: {
      //     // 'Content-Type': 'multipart/form-data',
      //     Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      //     // Authorization: `${localStorage.getItem("access_token")}`,
      //   },
    });
  },
  _getProductByID: async (id: string) => {
    return await instanceAxios({
      method: 'GET',
      url: url + '/' + id,
    });
  },

  _updateProduct: async (formData: any) => {
    return await instanceAxios({
      method: 'POST',
      url: url + '/update',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        // Authorization: `${localStorage.getItem("access_token")}`,
      },
    });
  },
};
