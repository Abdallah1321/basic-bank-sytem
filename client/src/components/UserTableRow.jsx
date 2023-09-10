import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UserTableRow = (props) => {
  const { _id, name, email, balance } = props.obj;

  const deleteUser = () => {
    axios
      .delete("https://banksystem-86qs.onrender.com/api/v1/users/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("User successfully deleted");
          window.location.reload();
        }
      });
  };

  const [user, setUser] = useState([]);
  const [formValues, setFormValues] = useState({
    sender: _id,
    receiver: "",
    amount: "",
  });

  useEffect(() => {
    axios
      .get("https://banksystem-86qs.onrender.com/api/v1/users/")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectData = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const receiver = el.getAttribute("id"); // Get the receiver's ID
    setFormValues((prev) => {
      return { ...prev, receiver: receiver };
    });
  };

  const selectAmount = (event) => {
    if (event.target.value > balance) {
      alert("Low Balance");
      window.location = "/";
    } else {
      setFormValues((prev) => {
        return { ...prev, amount: event.target.value };
      });
    }
  };

  const DataTable = () => {
    return user.map((category) => {
        // Check if the user is the sender (based on _id)
        if (category._id !== formValues.sender) {
            return (
                <option id={category._id}>{category.name}</option>
            );
        }
        return null; // Exclude the sender from the dropdown
    });
}

  const onSubmit = () => {
    if (formValues.receiver === "" || formValues.amount === "") {
      if (formValues.amount === "")
        alert("Please enter the amount you want to send");
      if (formValues.receiver === "") alert("Please select the receiver");
    } else if (formValues.receiver === formValues.sender) {
      alert("Sender and receiver can't be the same");
    } else {
      axios
        .post(
          "https://banksystem-86qs.onrender.com/api/v1/transactions",
          formValues
        )
        .then((res) => {
          if (res.status === 200) {
            alert("Transaction Successful");
            window.location = "/users";
          } else {
            Promise.reject();
          }
        })
        .catch((err) => alert(err));
      handleClose();
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{balance}</td>
      <td>
        <Button variant="primary" size="sm" onClick={handleShow}>
          Transfer
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <div className="d-flex justify-content-center">
              <Modal.Title>Transaction Screen</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-2">Transfer to:</div>
            <Form.Select name="receiver" onChange={selectData} required>
              <option>--none--</option>
              {DataTable()}
            </Form.Select>
            <form>
              <div className="mt-3 mb-2">
                <label>Amount:</label>
              </div>
              <input
                type="number"
                name="amount"
                className="transaction-amount"
                onChange={selectAmount}
                required
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={onSubmit}>
              Transfer
            </Button>
          </Modal.Footer>
        </Modal>
        <Button
          onClick={deleteUser}
          size="sm"
          variant="danger"
          className="delete-button"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default UserTableRow;
