import React from "react"

const Loading = () => {
    return (
        <div className="d-flex align-items-center m-5 p-5">
            <strong>Cargando...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )
}

export default Loading