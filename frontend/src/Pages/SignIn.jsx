import { useState } from "react"
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Title from "../Components/Shared/Title";
import Form from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const sumbitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("/api/v1/users/signin", { email: email, password: password });
            console.log(data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
    return (
        <Container className="small-container">
            <Title title="SignIn Page" />
            <h1 className="my-3"> Sign In</h1>
            <Form onSumbit={sumbitHandler}>
                <Form.Group className="mb-3">
                    <Form.label>Email</Form.label>
                    <Form.Control required onChange={(e)=> setEmail(e.target.value)}
                    placeholder="example@exmaple.com"></Form.Control>
                </Form.Group>
            </Form>
        </Container> >
  )
}

export default SignIn;