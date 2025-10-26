import React from 'react';
import { productos } from '../data/productos'; 
import ProductCard from '../components/ProductCard'; 

function Catalogo() {
    return (
        <main className="py-5" style={{ marginTop: '56px' }}> 
            <div className="container">
                <h1 className="section-title mb-4">Nuestro Catálogo</h1>
                
                <div id="catalog-product-list" className="row g-4">
                    {productos.map(product => (
                        <div className="col-lg-4 col-md-6 col-12" key={product.id}>
                            <ProductCard producto={product} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Catalogo;