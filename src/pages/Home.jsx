import React, { useState, useEffect } from 'react';
import { productos } from '../data/productos'; 
import ProductCard from '../components/ProductCard';

function Home() {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const shuffled = [...productos].sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffled.slice(0, 3));
    }, []);

    return (
        <main>
            {/* Carousel */}
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://imgs.search.brave.com/fXprSkM2OI-8O-ETOZFV_v98otXku_dDRr20MyCZK9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvMTky/MC14LTEwODAtaGQt/Z2FtaW5nLXJtc3Qx/bWUyd2psMmZ1dWcu/anBn" className="d-block w-100" alt="Escritorio con PC Gamer" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Construye el PC de Tus Sueños</h5>
                            <p>Componentes de última generación y la mejor asesoría.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?fit=crop&w=1920&h=900&q=80" className="d-block w-100" alt="PC" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Potencia Gráfica Sin Límites</h5>
                            <p>Descubre las tarjetas de video más poderosas del mercado.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* Ofertas */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title mb-4">Ofertas Imperdibles</h2>
                    <div id="featured-product-list" className="row g-4">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} producto={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Por Qué Elegirnos */}
            <section className="py-5 bg-dark text-white">
                <div className="container text-center">
                    <h2 className="section-title-light mb-5">¿Por Qué Elegir PC Builder?</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <i className="bi bi-cpu-fill fs-1 text-primary mb-3"></i>
                            <h3>Componentes de Calidad</h3>
                            <p className="text-white-50">Seleccionamos solo las mejores piezas para garantizar el máximo rendimiento y durabilidad.</p>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <i className="bi bi-wrench-adjustable-circle-fill fs-1 text-primary mb-3"></i>
                            <h3>Asesoría Experta</h3>
                            <p className="text-white-50">Nuestro equipo te guía en cada paso para asegurar la compatibilidad y el armado perfecto.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                            <h3>Compra Segura</h3>
                            <p className="text-white-50">Garantía total en todos tus productos y un proceso de compra confiable de principio a fin.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;