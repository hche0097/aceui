import React, { useState } from "react";
import Select from "react-select";
import { Modal, Form, Button } from "react-bootstrap";

const CustomRender = ({ value }) => {
  const [selectedOption, setSelectedOption] = useState(value);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data here
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.email.value);
    handleClose();
  };

  const handleChange = (option) => {
    setSelectedOption(option);
    // Check if the selected option is Accountant
    if (option.value === "Accountant") {
      // Show the modal form
      handleShow();
    }
  };

  const options = [
    { value: "System Architect", label: "System Architect" },
    { value: "Accountant", label: "Accountant" },
    { value: "IT Auditor", label: "IT Auditor" },
  ];

  return (
    <>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable
        isMulti
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

// In your column object for position, use this:
{
  label: "Position",
  field: "position",
  sort: "asc",
  width: 270,
  customBodyRender: (value) => {
    return <CustomRender value={value} />;
  }
}
