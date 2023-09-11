import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TransactionTableRow from "../components/TransactionTableRow";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userNames, setUserNames] = useState({}); // Store user names

  useEffect(() => {
    // Fetch transactions
    axios
      .get("https://banksystem-86qs.onrender.com/api/v1/transactions/")
      .then(({ data }) => {
        setTransactions(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Fetch user names for IDs
  useEffect(() => {
    async function fetchUserNames() {
      const updatedUserNames = {};

      for (const transaction of transactions) {
        try {
          if (!userNames[transaction.sender]) {
            const senderResponse = await axios.get(
              `https://banksystem-86qs.onrender.com/api/v1/users/${transaction.sender}`
            );
            updatedUserNames[transaction.sender] = senderResponse.data.name;
          }

          if (!userNames[transaction.receiver]) {
            const receiverResponse = await axios.get(
              `https://banksystem-86qs.onrender.com/api/v1/users/${transaction.receiver}`
            );
            updatedUserNames[transaction.receiver] = receiverResponse.data.name;
          }
        } catch (error) {
          console.error("Error fetching user names:", error);
        }
      }

      setUserNames((prevUserNames) => ({
        ...prevUserNames,
        ...updatedUserNames,
      }));
    }

    if (!isLoading) {
      fetchUserNames();
    }
  }, [isLoading, transactions, userNames]);

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
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : (
            transactions.map((transaction, i) => (
              <TransactionTableRow
                obj={{
                  ...transaction,
                  sender: userNames[transaction.sender] || transaction.sender, // Use user name or ID
                  receiver:
                    userNames[transaction.receiver] || transaction.receiver, // Use user name or ID
                }}
                key={i}
              />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionList;
