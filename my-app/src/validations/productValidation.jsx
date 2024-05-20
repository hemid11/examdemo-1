import * as yup from 'yup';

const ProductSchema = yup.object().shape({
  name: yup.string().required('Ad lazimdir'),
  salePrice: yup.number().required('SalePrice lazimdir').min(0),
  costPrice: yup.number().required('CostPrice lazimdir').min(0),
  imgSrc: yup.string().url('Duzgun bir URL girin').required('ProductImg lazimdir'),
  discountPercentage: yup.number().min(0, 'Endirim en az 0 faiz olmalıdır').max(100, 'Endirim en cox 100 faiz ola biler'),
  description: yup.string().min(10).required('Is Required'),
  categoryId: yup.string().required('Is Required'),
  stock: yup.number().required('Is Required').min(1),
});

export default ProductSchema;
