import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TransactionTableRow from "../components/TransactionTableRow";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("https://banksystem-86qs.onrender.com/api/v1/transactions/")
      .then(({ data }) => {
        setTransactions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getUserById = (userId) => {
    // Fetch user data by ID from your API
    // Replace the URL with your actual API endpoint for fetching user data
    return axios
      .get(`https://banksystem-86qs.onrender.com/api/v1/users/${userId}`)
      .then(({ data }) => data.name)
      .catch((err) => {
        console.log(err);
        return "User Not Found";
      });
  };

  const DataTable = () => {
    return transactions.map((transaction, i) => {
      // Fetch sender and receiver names based on their IDs
      const senderNamePromise = getUserById(transaction.sender);
      const receiverNamePromise = getUserById(transaction.receiver);

      return Promise.all([senderNamePromise, receiverNamePromise]).then(
        ([senderName, receiverName]) => {
          return (
            <TransactionTableRow
              obj={{
                ...transaction,
                sender: senderName,
                receiver: receiverName,
              }}
              key={i}
            />
          );
        }
      );
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default TransactionList;
