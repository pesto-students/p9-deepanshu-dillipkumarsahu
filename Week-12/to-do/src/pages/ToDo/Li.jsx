import { useState } from "react";
import Button from "../../component/Button";
import Dialog from "../../component/Dialog";
import InputField from "../../component/InputField";


const Li = ({ item, index, items, setItems }) => {
    const { completed, text } = item;
    const [edit, setEdit] = useState(false);
    const [editedTxt, setEditedText] = useState(text);
    const [open, setOpen] = useState(false);


    const handleCheckboxChange = () => {
        const newItems = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    };

    const handleEditList = () => {
        setEdit(!edit)
        setEditedText(text);
    }

    const handleChangeInput = (e) => {
        const { value } = e.target;
        if (value) setEditedText(value);
        else setOpen(true);
    }

    const handleSaveList = () => {
        setEdit(false);
        const newItems = [...items];
        newItems[index].text = editedTxt;
        setItems(newItems);
    }

    const handleDeleteList = () => {
        setItems(items.filter((e, i) => i !== index))
        setEdit(false);
    }

    return (
        <>
            <li key={index}>
                <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(index)}
                />
                <label style={{ textDecoration: completed ? "line-through" : "none" }}>
                    {edit ? <InputField value={editedTxt} onChange={handleChangeInput} /> : text}
                </label>
                {edit && <Button icon={'fa-save'} onClick={handleSaveList} className="save-btn" />}
                <Button icon={edit ? 'fa-close' : 'fa-edit'} onClick={handleEditList} className={edit ? 'cancel-btn' : 'edit-btn'} />
                <Button icon={'fa-trash'} onClick={() => setOpen(true)} className="delete-btn" label={'Delete'} />
            </li >

            <Dialog open={open} setOpen={setOpen} title={'Are you sure you want to delete this?'} onConfirm={handleDeleteList} />
        </>
    )
}

export default Li;