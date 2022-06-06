import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, TextInput, Group, Button, Textarea } from '@mantine/core';
import DropzoneComponent from '@components/dropzone';
import { useForm } from '@mantine/form';
import ProductInterface from '@interface/product';
import { ProductAPI } from '@api/products';
const ProductComponent = () => {
  const [product, setProduct] = useState<ProductInterface>();
  const onDrop = (file: File) => {
    console.log('FILE', file);
  };
  const router = useRouter();
  const { pid } = router.query;
  useEffect(() => {
    if (pid) {
      getProductFromResponseByID(pid.toString());
    }
  }, [pid]);
  const getProductFromResponseByID = async (id: string) => {
    const response = await ProductAPI._getProductByID(id);

    setProduct(response.data.product);
  };
  useEffect(() => {
    if (product) {
      setIntialValueForm(product!);
    }
  }, [product]);
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      price: '',
      type: '',
      hashtag: '',
      image: '',
      _id: '',
    },
  });
  const _onSubmitForm = async (product: ProductInterface) => {
    let formData = new FormData();
    Object.keys(product).map(key => {
      let data = product[key as keyof ProductInterface]?.toString();
      console.log('data', data);
      formData.append(key, data || '');
      //   if (key === 'imageUpload') {
      //     formData.append('imageUpload', product.imageUpload!);
      //   } else {

      //   }
    });
    let response = await ProductAPI._updateProduct(formData);
    console.log('response', response);
    // await fetchResUpdate(formData);
  };
  const setIntialValueForm = async (product: ProductInterface) => {
    // const checkUndifinedProduct = product.value(obj);
    if (
      product._id &&
      product.image &&
      product.title &&
      product.price &&
      product.description &&
      product.hashtag &&
      product.type
    ) {
      form.setFieldValue('title', product.title);
      form.setFieldValue('price', product.price);
      form.setFieldValue('description', product.description);
      let regexHashtag = product.hashtag.toString().trim().replace(/,/g, ' ');
      form.setFieldValue('hashtag', regexHashtag);
      form.setFieldValue('type', product.type);
      form.setFieldValue('_id', product._id);
      form.setFieldValue('image', product.image.toString());
    }
  };
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <form
      // onSubmit={() => {
      //   _onSubmitForm(product!);
      // }}
      >
        <TextInput
          style={{ margin: '10px 0' }}
          required
          label="Tên sản phẩm"
          placeholder="Tên sản phẩm"
          value={form.values.title}
          onChange={event => form.setFieldValue('title', event.target.value)}
          //   {...form.getInputProps('email')}
        />
        <DropzoneComponent callback={onDrop}></DropzoneComponent>
        <Textarea
          style={{ margin: '10px 0' }}
          required
          label="Mô tả"
          placeholder="Mô tả"
          value={form.values.description}
          onChange={event =>
            form.setFieldValue('description', event.target.value)
          }

          //   {...form.getInputProps('email')}
        />
        <TextInput
          style={{ margin: '10px 0' }}
          required
          label="Giá"
          placeholder="Giá"
          value={form.values.price}
          onChange={event => form.setFieldValue('price', event.target.value)}

          //   {...form.getInputProps('email')}
        />
        <TextInput
          style={{ margin: '10px 0' }}
          required
          label="Loại"
          placeholder="Loại"
          value={form.values.type}
          onChange={event => form.setFieldValue('type', event.target.value)}

          //   {...form.getInputProps('email')}
        />

        <Textarea
          placeholder="Hashtag"
          label="Hashtag"
          required
          style={{ margin: '10px 0' }}
          value={form.values.hashtag}
          onChange={event => form.setFieldValue('hashtag', event.target.value)}
        />

        <Group position="right" mt="md">
          <Button
            // type="submit"
            fullWidth
            onClick={() => {
              _onSubmitForm(product!);
            }}
          >
            Chỉnh sửa
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default ProductComponent;
