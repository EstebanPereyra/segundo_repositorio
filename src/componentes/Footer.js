const Footer = () => {
    return (
        <>
            <div className="container-fluid my-1">

                <footer className="bg-dark text-center text-lg-start text-white">
                    <div className="container p-4">
                        <div className="row mt-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Otros productos</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Temporada verano</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Temporada invierno</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Temporada primavera/otoño</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Redes sociales</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="fas fa-backspace fa-fw fa-sm me-2"></i>Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>TikTok</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>WhatsApp</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Términos y condiciones</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white">Nuestra marca</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Privacidad</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Tus pedidos</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white"><i className="fas fa-at fa-fw fa-sm me-2"></i>Ayuda pos-venta</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Verifica el estado de tu envío</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><i className="fas fa-envelope fa-fw fa-sm me-2"></i>Contános tu experiencia</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="text-center p-3">
                        © 2021 Copyright: Todos los Derechos reservados - Dev. Esteban J. Pereyra
                    </div>
                </footer>

            </div>

        </>
    )
}

export default Footer