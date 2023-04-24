

const ListItem = ({ item, index, dataList, setDataList }) => {

    const handleDelete = () => {
        setDataList(dataList.filter((e, i) => i !== index))
    }

    return (
        <ul>
            <li>
                <h5>Original Link - <a href={item.original_link} target="_blank">{item.original_link}</a></h5>
                <h5>Short Link - <a href={'https://' + item.short_link} target="_blank">https://{item.short_link}</a></h5>
                <div>
                    <button>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </li>
        </ul>
    )
}
export default ListItem;