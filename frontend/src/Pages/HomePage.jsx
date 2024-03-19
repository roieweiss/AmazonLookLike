import { useEffect, useReducer } from "react";
import Title from "../Components/Shared/Title";
import homePageReducer from "../Reducers/homePageReducer";
//import getProducts from "../../../backend/controllers/productsController";
import axios from 'axios';
import Loading from '../Components/Shared/Loading';


const initialState = { loading: true, error: '', data: [] }
const HomePage = () => {
  const [state, dispatch] = useReducer(homePageReducer, initialState)
  const {loading, error, data} = state;
  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: "GET_REQUEST" });
      try {
        const { data } = await axios.get("http://localhost:8080/api/v1/products")
        dispatch({ type: "GET_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "GET_FAIL", payload: error });
        console.log(state / error);
      }
    };
    getProducts();
  }, [])
  return (
    <div>
      <Title title="Amazon Shop"></Title>
      <div className='backgroundHomePage'>
        <img style={{ width: "100%" }} src="https://m.media-amazon.com/images/I/81d5OrWJAkL._SX3000_.jpg " alt="backgroundHomePage" />
      </div>
      <div className="products">
        {loading? <Loading/> : error? <MessageBox/> : (
          <div> Display Products here</div>
        ) }
      </div>

    </div>
  )
}

export default HomePage