import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const MessageAlert = ({ message, color }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            {show ? (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        {message}
                    </p>
                </Alert>
            ) : (null)}
        </>
    );
}

export default MessageAlert;