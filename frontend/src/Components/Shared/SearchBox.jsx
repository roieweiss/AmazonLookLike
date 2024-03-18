import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchBox = () => {
    return (
        <Form>
            <InputGroup>
                <FormControl type="text" name="q" id="q" placeholder="search for product" aria-describedby="button-search"></FormControl>
                <Button variant="outline-primary" id="button-search">
                    <i className="fa fa-search"></i>
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBox