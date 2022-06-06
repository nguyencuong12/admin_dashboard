import instanceAxios from "..";
const url = "/auth";

export const Auth = {
  login: (formData: any) => {
    return instanceAxios({
      url: url + "/login",
      data: formData,
      method: "POST",
      // data:
    });
  },
  logout: () => {},
};
