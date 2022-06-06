import { useLocation } from "react-router-dom";
import AddWordPresenter from "./AddWordPresenter";


export default function AddWordContainer() {
    const {state} :any = useLocation();
    return (
        <AddWordPresenter data={state}/>
    )
}