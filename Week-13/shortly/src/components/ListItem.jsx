
import copy from "copy-to-clipboard";
const ListItem = ({ item, index, dataList, setDataList }) => {

    const handleDelete = () => {
        setDataList(dataList.filter((e, i) => i !== index))
    }

    const copyToClipboard = () => {
        copy(item.short_link);
        alert(`You have copied "${item.short_link}"`);
    }

    return (
        <ul>
            <li>
                <h5>Original Link - <a href={item.original_link} target="_blank">{item.original_link}</a></h5>
                <h5>Short Link - <a href={'https://' + item.short_link} target="_blank">https://{item.short_link}</a></h5>
                <div>
                    <button onClick={copyToClipboard}>Copy link</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </li>
        </ul>
    )
}
export default ListItem;