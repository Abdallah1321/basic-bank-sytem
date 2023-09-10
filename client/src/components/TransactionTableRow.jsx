import React from "react";

const TransactionTableRow = (props) => {
    const {  sender,receiver, amount} = props.obj;
    console.log(sender,"sender")
    return (
        <tr>
            <td>{sender}</td>
            <td>{receiver}</td>
            <td>{amount}</td>
        </tr>
    )
}

export default TransactionTableRow;