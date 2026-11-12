import React, { useState } from 'react';
import { ProductTable } from '../../components/admin/ProductTable';

export const AdminCatalogoView = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Gestión del Catálogo</h1>
        <p className="text-sm text-gray-600">
          Administra el inventario maestro, actualiza precios, gramajes y da de alta nuevos productos.
        </p>
      </div>

      <ProductTable
        onOpenCreateModal={() => setIsCreateModalOpen(true)}
        onOpenEditModal={(prod) => {
          setProductoSeleccionado(prod);
          setIsEditModalOpen(true);
        }}
      />

      {/* Modal Creación */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Crear Nuevo Producto</h3>
            <p className="text-sm text-gray-600 mb-6">Formulario de alta en desarrollo.</p>
            <button
              onClick={() => setIsCreateModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal Edición */}
      {isEditModalOpen && productoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Editar Producto: {productoSeleccionado.nombre}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              SKU: <span className="font-semibold">{productoSeleccionado.sku}</span>
            </p>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCatalogoView;