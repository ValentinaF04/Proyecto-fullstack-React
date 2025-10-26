import React from 'react';


function Carrito() { 
    return (
        <main className="py-5">
            <div className="container">
                <h1 className="section-title mb-4">Carrito de Compras</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="table-responsive">
                            <table className="table table-dark table-striped align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="https://www.winpy.cl/files/39899-1414-Monitor-Gamer-MSI-MAG-275F-1.jpg" alt="Monitor Gamer MSI" className="img-fluid rounded me-3" style={{ width: '100px' }} />
                                                <div>
                                                    <h6 className="mb-0">Monitor Gamer MSI MAG 27"</h6>
                                                    <small className="text-muted">240Hz, 1ms, Adaptive Sync</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$119.990</td>
                                        <td>
                                            <input type="number" className="form-control form-control-sm" defaultValue="1" style={{ width: '70px' }} />
                                        </td>
                                        <td>$119.990</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm"><i className="bi bi-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="https://foreign.cl/wp-content/uploads/2024/01/https___media-prod-use-1.mirakl.webp" alt="Tarjeta de Video" className="img-fluid rounded me-3" style={{ width: '100px' }} />
                                                <div>
                                                    <h6 className="mb-0">Tarjeta de Video NVIDIA RTX 4060</h6>
                                                    <small className="text-muted">GIGABYTE WINDFORCE OC 8GB</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$389.990</td>
                                        <td>
                                            <input type="number" className="form-control form-control-sm" defaultValue="1" style={{ width: '70px' }} />
                                        </td>
                                        <td>$389.990</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm"><i className="bi bi-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card bg-dark border-secondary">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Resumen de tu compra</h5>
                                <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
                                    <p className="mb-0 fw-bold">Producto (<span id="total-productos">2</span>)</p>
                                    <a href="#" className="text-white-50 text-decoration-none">Editar</a>
                                </div>
                                
                                <div id="lista-productos" className="mb-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <img src="https://foreign.cl/wp-content/uploads/2024/01/https___media-prod-use-1.mirakl.webp" alt="Tarjeta de Video" className="img-fluid rounded me-3" style={{ width: '50px' }} />
                                        <div>
                                            <p className="mb-0 fw-bold">Tarjeta de Video NVIDIA RTX 4060</p>
                                            <small className="text-muted">Cantidad: 1</small>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <img src="https://www.winpy.cl/files/39899-1414-Monitor-Gamer-MSI-MAG-275F-1.jpg" alt="Monitor Gamer MSI" className="img-fluid rounded me-3" style={{ width: '50px' }} />
                                        <div>
                                            <p className="mb-0 fw-bold">Monitor Gamer MSI MAG 27"</p>
                                            <small className="text-muted">Cantidad: 1</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <p className="text-muted">Total Transferencia</p>
                                    <p className="fw-bold">$509.980</p>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <p className="text-muted">Total otros medios de pago</p>
                                    <p className="fw-bold">$509.980</p>
                                </div>
                                
                                <hr className="text-white-50" />
                                
                                <div className="d-flex align-items-center bg-secondary p-3 rounded mb-3">
                                    <i className="bi bi-truck me-3 fs-4 text-white-50"></i>
                                    <p className="mb-0 text-white-50">El valor del despacho se calculará cuando se seleccione el tipo de entrega.</p>
                                </div>
                                
                                <div className="d-grid mt-4">
                                    <button className="btn btn-primary btn-lg">Continuar</button>
                                </div>
                                
                                <div className="d-flex justify-content-around text-center mt-3">
                                    <div>
                                        <i className="bi bi-shield-lock fs-5"></i>
                                        <p className="small mb-0">Pago 100% seguro</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-shield-check fs-5"></i>
                                        <p className="small mb-0">Garantía en tus productos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default Carrito;