import React from "react";
import { Container } from "reactstrap";
//
import Header from "./Header";
import RegisterModal from "./modals/RegisterModal";

const Layout = ({ children }) => {
    return (
        <>
            <Container className="mb-4">
                <Header />
            </Container>
            ;{children}
            <Container className="mb-4">
                <footer />
            </Container>
            <RegisterModal />
        </>
    );
};

export default Layout;
