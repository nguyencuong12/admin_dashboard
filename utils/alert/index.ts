import swal from "sweetalert";

export const AlertObject = {
  success: async (title: string, callback: Function) => {
    swal({
      title: title,
      icon: "success",
    }).then((value) => {
      callback();
      // window.location.href = redirect;
    });
  },
  delete: async (title: string, callback: Function) => {
    swal({
      title: title,
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Ok"],
    }).then((willDelete) => {
      if (willDelete) {
        callback();
        swal("Đã xóa sản phẩm!", {
          icon: "success",
        });
      }
    });
  },
  update: async (title: string) => {},
};
