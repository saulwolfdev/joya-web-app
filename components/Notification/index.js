const Notification = ({view, message, type}) => {
    let clazz = "joyaToast ns-box ns-other ns-effect-loadingcircle ";
    if(type === "success" || type === "warning" || type === "error") {
        clazz += type;
    }
    return (
        <>
        {view ? 
            <div className={clazz}>
                <div className="ns-box-inner"><p>{message}</p></div>
                <span className="ns-close"/>
            </div>
            :
            <></>
        }
        </>
    )
}

export default Notification;