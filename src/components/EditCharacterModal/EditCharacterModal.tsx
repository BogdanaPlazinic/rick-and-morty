import React, { useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { toast } from "react-toastify";


const EditCharacterModal = ({ isOpen, onClose, character, onSave }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (character) {
      form.setFieldsValue({
        name: character.name,
        species: character.species,
        status: character.status,
        gender: character.gender,
      });
    }
  }, [character, form]);

  const handleSave = (values) => {
    onSave({ ...character, ...values });
    onClose();
  };

  const notify = () => {
    toast.info("Your changes are saved");
  }


  
  return (
    <Modal title="Edit Character" open={isOpen} onCancel={onClose} footer={null}>
      <Form form={form} layout="vertical" onFinish={handleSave}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter name" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Species" name="species" rules={[{ required: true, message: "Please enter species" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select>
            <Select options={[{ value: "Alive", label: <span>Alive</span> }]} />
            <Select options={[{ value: "Dead", label: <span>Dead</span> }]} />
            <Select options={[{ value: "Unknown", label: <span>Unknown</span> }]} />
          </Select>
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Select>
          <Select options={[{ value: "Male", label: <span>Male</span> }]} />
          <Select options={[{ value: "Female", label: <span>Female</span> }]} />
          <Select options={[{ value: "Genderless", label: <span>Genderless</span> }]} />
          <Select options={[{ value: "Unknown", label: <span>Unknown</span> }]} />
          </Select>
        </Form.Item>

        <Button 
        onClick={notify}
        type="primary" 
        htmlType="submit">Save Changes</Button>
      </Form>
    </Modal>
  );
};

export default EditCharacterModal;