import styles from './table-row.module.scss'
import { useDispatch } from "react-redux";
import {
    addToFavorites,
    decreaseFavoritesItemCount,
    deleteFromFavorites,
} from "src/redux/shop/shop.actions";import styles from "./table-row.module.scss";

const TableRow = (props) => {
    const dispatch = useDispatch();
    const { rowData } = props;

    const decreaseCount = () => {
        dispatch(decreaseFavoritesItemCount(rowData));
    };
    const increaseCount = () => {
        dispatch(addToFavorites(rowData));
    };

    return (
        <tr className={styles.container}>
            <td>
                <img className={styles.image} src={rowData.imageUrl} alt="" />
            </td>
            <td>
                <div>{rowData.name}</div>
            </td>
            <td>
            <div className={styles.quantity}>
                    <div onClick={decreaseCount} className="u-cursor--pointer">
                        {"<"}
                    </div>
                    <div>{rowData.count}</div>
                    <div onClick={increaseCount} className="u-cursor--pointer">
                        {">"}
                    </div>
                </div>
            </td>
            <td>
                <div>{rowData.price}</div>
            </td>
            <td>
            <span
                    className="u-cursor--pointer"
                    onClick={() => dispatch(deleteFromFavorites(rowData))}
                >
                    X
                </span>
            </td>
        </tr>
    );
};

export default TableRow;