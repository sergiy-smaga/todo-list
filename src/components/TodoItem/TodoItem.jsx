import { deleteTodoThunk } from "../../redux/todoOperations";
import { useDispatch } from "react-redux";

export default function TodoItem({
  item: { id, text, isFavorite, isCompleted },
}) {
  const dispatch = useDispatch();

  return (
    <li style={{ display: "flex" }}>
      <h5>{text}</h5>
      <p>{id}</p>
      <button>Menu</button>
      <div>
        Pop-up
        <ul style={{ display: "flex" }}>
          <li>
            <button>{isCompleted ? "Completed" : "Back in work"}</button>
          </li>
          <li>
            <button>
              {isFavorite ? "Add to favorite" : "Remove from favorite"}
            </button>
          </li>
          <li>
            <button>Edit</button>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(deleteTodoThunk(id));
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
}
