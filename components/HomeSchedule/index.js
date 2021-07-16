const HomeSchedule = () => {
    return (
        <div className="main-content recorridos-lista">
            <div className="admin-sintesis">
                <div className="container-fluid">
                    <div className="row sintesis-header">
                        <div className="col-auto info-fecha">
                            <h3>Lun. 20 de abril</h3>
                        </div>
                        <div className="col-auto nav-dias">
                            <a href="#" className="prev-day">
                                <i className="far fa-angle-left" />
                            </a>
                            <a href="admin-agenda.html" className="next-day">
                                <i className="far fa-angle-right" />
                            </a>
                        </div>
                        <a href="admin-agenda.html" className="btn-dia col-auto">
                        Hoy
                        </a>
                    </div>
                </div>
            </div>
            <div className="more-content">
                <div className="menu">
                    <div className="container-fluid">
                        <ul>
                        {/*<li><a href="#">Resumen</a></li>*/}
                        <li className="active">
                            <a href="/admin-agenda.html">Recorridos</a>
                        </li>
                        <li>
                            <a href="#">Urgencias</a>
                        </li>
                        {/*<li class="active"><a href="#">Perfil</a></li>*/}
                        </ul>
                    </div>
                </div>
                <div className="container-fluid recorridos-tablas">
                    <div className="list-collapse">
                        <div
                            className="collapse-bar"
                            data-bs-toggle="collapse"
                            href="#listaRecorridosPublicados"
                            role="button"
                            aria-expanded="false"
                            aria-controls="listaRecorridosPublicados"
                        >
                            Recorridos publicados
                        </div>
                        <div
                            className="collapse show collapse-table"
                            id="listaRecorridosPublicados"
                        >
                            <div className="table-responsive">
                                <table className="table admin-table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="cell-estado" />
                                            <th scope="col" className="cell-horario ordenable up">
                                                Horario
                                            </th>
                                            <th scope="col" className="cell-vidrierista ordenable">
                                                Vidrierista
                                            </th>
                                            <th scope="col" className="cell-nombre ordenable">
                                                Nombre
                                            </th>
                                            <th scope="col" className="cell-locales ordenable">
                                                Cant. locales
                                            </th>
                                            <th scope="col" className="cell-estadotexto ordenable">
                                                Estado
                                            </th>
                                            <th scope="col" className="cell-accion" />
                                            <th scope="col" className="cell-mas" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="recorrido-completado">
                                            <td scope="col" className="cell-estado">
                                                <i title="Completado" />
                                            </td>
                                            <td scope="col" className="cell-horario">
                                                13:00-19:00
                                            </td>
                                            <td scope="col" className="cell-vidrierista">
                                                Victor Sanchez
                                            </td>
                                            <td scope="col" className="cell-nombre">
                                                Tarde D
                                            </td>
                                            <td scope="col" className="cell-locales">
                                                5 <span className="d-none d-lg-inline">locales</span>
                                            </td>
                                            <td scope="col" className="cell-estadotexto">
                                                Completado
                                            </td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-primary btn-small">
                                                Ver
                                                </a>
                                            </td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a
                                                        href="#"
                                                        className="btn btn-tertiary"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="far fa-ellipsis-h" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Ver recorrido
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Copiar link
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-completado">
                                            <td scope="col" className="cell-estado">
                                                <i title="Completado" />
                                            </td>
                                            <td scope="col" className="cell-horario">
                                                13:00-19:00
                                            </td>
                                            <td scope="col" className="cell-vidrierista">
                                                Victor Sanchez
                                            </td>
                                            <td scope="col" className="cell-nombre">
                                                Tarde D
                                            </td>
                                            <td scope="col" className="cell-locales">
                                                5 <span className="d-none d-lg-inline">locales</span>
                                            </td>
                                            <td scope="col" className="cell-estadotexto">
                                                Completado
                                            </td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-primary btn-small">
                                                Ver
                                                </a>
                                            </td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a
                                                        href="#"
                                                        className="btn btn-tertiary"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="far fa-ellipsis-h" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Ver recorrido
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Copiar link
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-completado">
                                            <td scope="col" className="cell-estado">
                                                <i title="Completado" />
                                            </td>
                                            <td scope="col" className="cell-horario">
                                                13:00-19:00
                                            </td>
                                            <td scope="col" className="cell-vidrierista">
                                                Victor Sanchez
                                            </td>
                                            <td scope="col" className="cell-nombre">
                                                Tarde D
                                            </td>
                                            <td scope="col" className="cell-locales">
                                                5 <span className="d-none d-lg-inline">locales</span>
                                            </td>
                                            <td scope="col" className="cell-estadotexto">
                                                Completado
                                            </td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-primary btn-small">
                                                Ver
                                                </a>
                                            </td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a
                                                        href="#"
                                                        className="btn btn-tertiary"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="far fa-ellipsis-h" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Ver recorrido
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Copiar link
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="recorrido-completado">
                                            <td scope="col" className="cell-estado">
                                                <i title="Completado" />
                                            </td>
                                            <td scope="col" className="cell-horario">
                                                13:00-19:00
                                            </td>
                                            <td scope="col" className="cell-vidrierista">
                                                Victor Sanchez
                                            </td>
                                            <td scope="col" className="cell-nombre">
                                                Tarde D
                                            </td>
                                            <td scope="col" className="cell-locales">
                                                5 <span className="d-none d-lg-inline">locales</span>
                                            </td>
                                            <td scope="col" className="cell-estadotexto">
                                                Completado
                                            </td>
                                            <td scope="col" className="cell-accion">
                                                <a href="#" className="btn btn-primary btn-small">
                                                Ver
                                                </a>
                                            </td>
                                            <td scope="col" className="cell-mas">
                                                <div className="btn-group">
                                                    <a
                                                        href="#"
                                                        className="btn btn-tertiary"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="far fa-ellipsis-h" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Ver recorrido
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Copiar link
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSchedule;