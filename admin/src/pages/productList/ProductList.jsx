import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './productList.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../../redux/apiCalls';


const ProductList = () => {
    const dispatch = useDispatch()
    const products =useSelector(state=>state.product.products)

    useEffect(()=>{
      getProducts(dispatch)
    },[dispatch])

    const handleDelete = (id) => {
      deleteProduct(id, dispatch)
    };
  
    const columns = [
      { field: "_id", headerName: "ID", width: 220 },
      {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.title}
            </div>
          );
        },
      },
      { 
        field: "inStock", 
        headerName: "Stock", 
        width: 200 
      },
      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/product/" + params.row._id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </>
          );
        },
      },
    ];
  
    return (
      <div className="productList">
        <DataGrid
          rows={products}
          getRowId={row=>row._id}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    );
}

export default ProductList