import axios from "axios";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import ListItem from "./ListItem";

const Shortly = ({ user }) => {
    const [subBtnTxt, setSubBtnTxt] = useState('Submit');
    const [loader, setLoder] = useState(true);
    const [refresh, setRefresh] = useState(0);
    const [url, setUrl] = useState('')
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetchPost();
    }, [refresh]);

    const fetchPost = async () => {
        const collection_ref = collection(db, "shortly")
        const q = query(collection_ref, where("uid", "==", user.uid))
        const querySnapshot = await getDocs(q);
        const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log(newData);
        setDataList(newData);
        setLoder(false);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubBtnTxt('Converting...');
        if (url) {
            try {
                const { data } = await axios.get('https://api.shrtco.de/v2/shorten?url=' + url);
                const { code, original_link, short_link } = data.result;

                // firebase code
                const docRef = await addDoc(collection(db, "shortly"), {
                    uid: user.uid,
                    code,
                    original_link,
                    short_link
                });
                console.log("Document written with ID: ", docRef.id);
                setUrl('')
                setRefresh(refresh + 1);
                setSubBtnTxt('Submit');
            } catch (error) {
                alert(error.response.data.error);
                setSubBtnTxt('Submit');
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
                <button type="submit" disabled={subBtnTxt === 'Converting...'}>{subBtnTxt}</button>
            </form>

            {
                loader ?
                    dataList.length > 0 ?
                        dataList.map((item, i) => <ListItem item={item} key={item.id} index={i} dataList={dataList} setDataList={setDataList} />)
                        :
                        <h4>No Data Found</h4>
                    :
                    <h4>Loading...</h4>
            }
        </div>
    )
}
export default Shortly;