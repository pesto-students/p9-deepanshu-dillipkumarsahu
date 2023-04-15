import Li from "./Li";
const List = ({ items, setItems }) => (
    <ul class="list">
        {items.length > 0 ? (
            items.map((item, i) => <Li item={item} key={i} index={i} items={items} setItems={setItems} />)
        ) : (
            <p>No Item Yet !</p>
        )}
    </ul>
)
export default List;