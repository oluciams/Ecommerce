
import {createStore} from "redux/tolkit";
import { handleCart } from "./reducer/handleCart";

export const store = createStore(handleCart);