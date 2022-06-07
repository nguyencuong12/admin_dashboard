import instanceAxios from "../axios";

let url = "/search";

export const SearchAPI = {
  search: async (searchField: string) => {
    return await instanceAxios({
      method: "GET",
      url: url,
      params: {
        searchField: searchField,
      },
    });
  },
};
