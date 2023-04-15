import Button from "./Button";

const styles = {
    dialogBoxOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogBox: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        maxWidth: 500,
    },
    dialogBoxTitle: {
        marginTop: 0,
    },
    dialogBoxContent: {
        marginBottom: 0,
    },
    actionBox: {
        display: 'flex',
        justifyContent: 'end'
    }
};

const Dialog = ({ open, setOpen, title, onConfirm }) => open && (
    <div style={styles.dialogBoxOverlay}>
        <div style={styles.dialogBox}>
            <h3 style={styles.dialogBoxTitle}>{title}</h3>
            <div style={styles.actionBox}>
                <Button label="Cancel" className={'cancel-btn'} onClick={() => setOpen(false)} />
                <Button label="Yes" className={'delete-btn'} onClick={() => { onConfirm(); setOpen(false); }} />
            </div>
        </div>
    </div>
)

export default Dialog;
