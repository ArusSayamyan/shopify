import styles from './table-row.module.scss'

const TableRow = (props) => {
    const { rowData } = props;
    return (
        <tr className={styles.container}>
            <td>
                <img  className={styles.image} src={rowData.imageUrl} alt="" />
            </td>
            <td>
                <div>{rowData.name}</div>
            </td>
            <td>
                <div>{rowData.count}</div>
            </td>
            <td>
                <div>{rowData.price}</div>
            </td>
            <td>
                <span>X</span>
            </td>
        </tr>
    );
};

export default TableRow;