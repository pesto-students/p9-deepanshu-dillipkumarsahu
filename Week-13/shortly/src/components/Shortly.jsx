import axios from "axios";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const Shortly = ({ user }) => {
    const [url, setUrl] = useState('')
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem(user.uid)) {
            setDataList(JSON.parse(localStorage.getItem(user.uid)))
        }
    }, [localStorage.getItem(user.uid)])

    useEffect(() => {
        localStorage.setItem(user.uid, JSON.stringify(dataList));
    }, [dataList]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (url) {
            try {
                const { data } = await axios.get('https://api.shrtco.de/v2/shorten?url=' + url);
                const { code, original_link, short_link } = data.result;

                setDataList([
                    ...dataList,
                    {
                        code,
                        original_link,
                        short_link
                    }
                ]);
                setUrl('')
            } catch (error) {
                alert(error.response.data.error);
            }
        }
        else {
            alert('Please enter a valid url')
        }
    }

    return (
        <div className="Shortly">
            <form onSubmit={handleSubmit}>
                <input type="url" placeholder="https://www.example.com" value={url} onChange={(e) => setUrl(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            {
                dataList.map((item, i) => <ListItem item={item} key={item.code} index={i} dataList={dataList} setDataList={setDataList} />)
            }
        </div>
    )
}
export default Shortly;