import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, TextInput, Group, Button, Textarea } from "@mantine/core";
import DropzoneComponent from "@components/dropzone";
import { useForm } from "@mantine/form";
import ProductInterface from "@interface/product";
import { ProductAPI } from "@api/products";
import { AlertObject } from "@utils/alert";

const ProductComponent = () => {
  const router = useRouter();
  const [product, setProduct] = useState<ProductInterface>();
  const [file, setFile] = useState<File>();
  const onDrop = (file: File) => {
    setFile(file);
  };

  //   useEffect(() => {
  //     if (product) {
  //       setIntialValueForm(product!);
  //     }
  //   }, [product]);
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      price: "",
      type: "",
      hashtag: "",
      image: "",
      _id: "",
    },
  });
  const _onSubmitForm = async () => {
    let data = {
      ...form.values,
      ["image"]: file,
    };
    await ProductAPI._createProduct(data);
    await AlertObject.success("Tạo sản phẩm thành công !!", () => {
      router.push("/products");
    });
  };

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <form
        onSubmit={() => {
          _onSubmitForm();
        }}
      >
        <TextInput
          style={{ margin: "10px 0" }}
          required
          label="Tên sản phẩm"
          placeholder="Tên sản phẩm"
          onChange={(event) => form.setFieldValue("title", event.target.value)}
          //   {...form.getInputProps('email')}
        />
        <DropzoneComponent callback={onDrop}></DropzoneComponent>
        <Textarea
          style={{ margin: "10px 0" }}
          required
          label="Mô tả"
          placeholder="Mô tả"
          onChange={(event) => form.setFieldValue("description", event.target.value)}

          //   {...form.getInputProps('email')}
        />
        <TextInput
          style={{ margin: "10px 0" }}
          required
          label="Giá"
          placeholder="Giá"
          onChange={(event) => form.setFieldValue("price", event.target.value)}

          //   {...form.getInputProps('email')}
        />
        <TextInput
          style={{ margin: "10px 0" }}
          required
          label="Loại"
          placeholder="Loại"
          onChange={(event) => form.setFieldValue("type", event.target.value)}

          //   {...form.getInputProps('email')}
        />

        <Textarea placeholder="Hashtag" label="Hashtag" required style={{ margin: "10px 0" }} onChange={(event) => form.setFieldValue("hashtag", event.target.value)} />

        <Group position="right" mt="md">
          <Button
            // type="submit"
            fullWidth
            onClick={() => {
              _onSubmitForm();
            }}
          >
            Tạo sản phẩm
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default ProductComponent;
