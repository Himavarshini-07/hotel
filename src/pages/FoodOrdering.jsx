import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function FoodOrdering() {
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);

  const foodPrices = {
    Tea: 30,
    Coffee: 50,
    Burger: 120,
    Pizza: 250,
    Sandwich: 100,
    Juice: 80,
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const allOrders =
      JSON.parse(
        localStorage.getItem("foodOrders")
      ) || [];

    const userOrders =
      allOrders.filter(
        (order) =>
          order.userEmail ===
          currentUser.email
      );

    setOrders(userOrders);
  };

  const placeOrder = () => {
    if (!food) {
      alert("Please Select Food Item");
      return;
    }

    const currentUser = JSON.parse(
      localStorage.getItem("user")
    );

    const newOrder = {
      orderId: "FD" + Date.now(),
      userEmail: currentUser.email,
      item: food,
      quantity: Number(quantity),
      amount:
        foodPrices[food] *
        Number(quantity),
      date: new Date().toLocaleDateString(),
      status: "Preparing",
    };

    const existingOrders =
      JSON.parse(
        localStorage.getItem("foodOrders")
      ) || [];

    existingOrders.push(newOrder);

    localStorage.setItem(
      "foodOrders",
      JSON.stringify(existingOrders)
    );

    loadOrders();

    setFood("");
    setQuantity(1);

    alert("Order Placed Successfully");
  };

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="main-content">

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >

          <h1
            style={{
              fontSize: "40px",
              marginBottom: "25px",
            }}
          >
            Food Ordering
          </h1>

          <select
            value={food}
            onChange={(e) =>
              setFood(e.target.value)
            }
            style={inputStyle}
          >
            <option value="">
              Select Food Item
            </option>

            <option>
              Tea
            </option>

            <option>
              Coffee
            </option>

            <option>
              Burger
            </option>

            <option>
              Pizza
            </option>

            <option>
              Sandwich
            </option>

            <option>
              Juice
            </option>

          </select>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value)
            }
            placeholder="Quantity"
            style={inputStyle}
          />

          <button
            className="logout-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>

        </div>

        <div
          style={{
            marginTop: "25px",
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >

          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            My Food Orders
          </h2>

          {orders.length === 0 ? (
            <h3>
              No Orders Found
            </h3>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse:
                  "collapse",
              }}
            >

              <thead>

                <tr
                  style={{
                    background:
                      "#111827",
                    color: "white",
                  }}
                >

                  <th
                    style={
                      tableHead
                    }
                  >
                    Order ID
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Item
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Quantity
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Amount
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Date
                  </th>

                  <th
                    style={
                      tableHead
                    }
                  >
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {orders.map(
                  (order) => (
                    <tr
                      key={
                        order.orderId
                      }
                    >

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          order.orderId
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          order.item
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          order.quantity
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        ₹
                        {
                          order.amount
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        {
                          order.date
                        }
                      </td>

                      <td
                        style={
                          tableCell
                        }
                      >
                        <span
                          style={{
                            color:
                              "#2563eb",
                            fontWeight:
                              "bold",
                          }}
                        >
                          {
                            order.status
                          }
                        </span>
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>
          )}

        </div>

      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  marginBottom: "15px",
};

const tableHead = {
  padding: "12px",
  textAlign: "center",
};

const tableCell = {
  padding: "12px",
  textAlign: "center",
  borderBottom:
    "1px solid #e5e7eb",
};

export default FoodOrdering;