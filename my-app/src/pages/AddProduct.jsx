import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import ProductSchema from '../validations/productValidation';
import { addProduct, fetchProducts, deleteProduct } from '../api';

const AddProduct = () => {
  const [products, setProducts] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: '',
      salePrice: 0,
      costPrice: 0,
      imgSrc: '',
      discountPercentage: 0,
      description: '',
      categoryId: '',
      stock: 1,
    },
    validationSchema: ProductSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addProduct(values);
        resetForm();
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Errort:', error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label>Sale Price</label>
          <input
            type="number"
            name="salePrice"
            value={formik.values.salePrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.salePrice && formik.errors.salePrice ? (
            <div>{formik.errors.salePrice}</div>
          ) : null}
        </div>
        <div>
          <label>Cost Price</label>
          <input
            type="number"
            name="costPrice"
            value={formik.values.costPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.costPrice && formik.errors.costPrice ? (
            <div>{formik.errors.costPrice}</div>
          ) : null}
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="imgSrc"
            value={formik.values.imgSrc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.imgSrc && formik.errors.imgSrc ? (
            <div>{formik.errors.imgSrc}</div>
          ) : null}
        </div>
        <div>
          <label>Discount Percentage</label>
          <input
            type="number"
            name="discountPercentage"
            value={formik.values.discountPercentage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.discountPercentage && formik.errors.discountPercentage ? (
            <div>{formik.errors.discountPercentage}</div>
          ) : null}
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <div>
          <label>Category ID</label>
          <input
            type="text"
            name="categoryId"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.categoryId && formik.errors.categoryId ? (
            <div>{formik.errors.categoryId}</div>
          ) : null}
        </div>
        <div>
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.stock && formik.errors.stock ? (
            <div>{formik.errors.stock}</div>
          ) : null}
        </div>
        <button type="submit">Add Product</button>
      </form>
      <div>
        <h2>Products List</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - {product.salePrice} - {product.stock}
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddProduct;
