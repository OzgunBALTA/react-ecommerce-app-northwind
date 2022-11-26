import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ProductServices from "../../../services/productService";

export default function Products() {
  let productService = new ProductServices();
  const { isLoading, error, data } = useQuery(["admin:products"], () =>
    productService.getProductsDetails()
  );

  const deleteMutation = useMutation(productService.deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });
  const queryClient = useQueryClient();

  if (isLoading) return "loading...";
  if (error) return "An error has occurred: " + error.message;
  const products = data.data.data;
  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "Units In Stock",
      dataIndex: "unitsInStock",
      key: "unitsInStock",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <div>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <Link to={`/admin/products/${record.productId}`}>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </Link>
              </div>

              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-danger">
                  <Popconfirm
                    title="Are You Sure ?"
                    onConfirm={() =>
                      deleteMutation.mutate(record.productId, {
                        onSuccess: () => toast.success("Ürün Silindi"),
                      })
                    }
                    onCancel={() => console.log("İptal Edildi")}
                    okText="Yes"
                    cancelText="No"
                  >
                    Delete
                  </Popconfirm>
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <h3>Products</h3>
      <br />
      <br />
      <Link to="/admin/products/new">
        <button type="button" className="btn btn-info">
          New
        </button>
      </Link>
      <br />
      <br />
      <Table dataSource={products} columns={columns} rowKey="productId" />;
    </div>
  );
}
