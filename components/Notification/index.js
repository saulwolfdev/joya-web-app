const Notification = ({view, setView, message, type}) => {
    let clazz = "joyaToast ns-box ns-other ns-effect-loadingcircle ";
    if(type === "success" || type === "warning" || type === "error") {
        clazz += type;
    }

    const handleClose = (e) => {
        e.preventDefault();
        console.log("Hola")
        setView(false);
    }

    return (
        <>
        {view ? 
            <div className={clazz}>
                <div className="ns-box-inner"><p>{message}</p></div>
                <div className="ns-close" onClick={handleClose}/>
            </div>
            :
            <></>
        }
        </>
    )
}

export default Notification;