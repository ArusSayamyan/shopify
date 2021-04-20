import { useSelector } from "react-redux";
import TableRow from "./table-row/TableRow.component";
import styles from "./checkout.module.scss";
import Button from "src/components/button/Button.component";

const Checkout = () => {
    const favorites = useSelector((state) => state.shop.favorites);
    var initialValue = 0;
    var totalPrice = favorites.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.price * currentValue.count;
    }, initialValue);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map((rowData) => (
                        <TableRow rowData={rowData} />
                    ))}
                </tbody>
            </table>
            <div className={styles.bottom}>
                <div className={styles.total}>TOTAL: $ {totalPrice}</div>
                <Button>Pay Now</Button>
            </div>
        </div>
    );
};

export default Checkout;
