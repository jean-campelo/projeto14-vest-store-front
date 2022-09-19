import { useNavigate } from "react-router-dom";
import { SelectionWrapper } from "./StyledComponentsHome";

export default function Selection({
    selectionObj
}) {

    const navigate = useNavigate();

    function navigateToSelection(id) {
        navigate(`/selection/${id}`);
    }

    return (
        <SelectionWrapper onClick={() => { navigateToSelection(selectionObj.idSelection) }} >
            <img src={selectionObj.img} alt="Seleção" />

        </SelectionWrapper>
    );
}