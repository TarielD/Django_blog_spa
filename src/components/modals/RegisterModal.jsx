import React from "react";
import { useModalManager } from "@vlzh/react-modal-manager";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import { getFormValues } from "../../utils";
import { AuthApi } from "../../api";

const RegisterModal = () => {
    let form = React.useRef();
    let { isOpen, closeModal } = useModalManager("register_modal");
    let is_open = isOpen("register_modal");
    let close_modal = () => closeModal("register_modal");
    let sendHandler = (e) => {
        e.preventDefault();
        if (form.current) {
            AuthApi.registerUser(getFormValues(form.current));
        }
    };

    return (
        <Modal isOpen={is_open} toggle={close_modal}>
            <ModalHeader toggle={close_modal}>Registration</ModalHeader>
            <ModalBody>
                <Form onSubmit={sendHandler} innerRef={form}>
                    <FormGroup>
                        <Label for="register_username">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            id="register_username"
                            placeholder="Type your username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="register_email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="register_email"
                            placeholder="Type your email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="register_password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="register_password"
                            placeholder="***"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="register_first_name">First name</Label>
                        <Input
                            type="text"
                            name="first_name"
                            id="register_first_name"
                            placeholder="Type youe first name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="register_last_name">Last name</Label>
                        <Input
                            type="text"
                            name="last_name"
                            id="register_last_name"
                            placeholder="Type youe last name"
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button type="submit" color="primary">
                    Send
                </Button>{" "}
                <Button type="button" color="secondary" onClick={close_modal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default RegisterModal;
