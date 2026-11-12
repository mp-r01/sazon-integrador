import React, { useState } from 'react';
import { ProductTable } from '../../components/admin/ProductTable';

export const AdminCatalogoView = () => {
  // Estados para controlar los modales
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Funciones para abrir y cerrar el modal de Creación
  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  // Funciones para abrir y cerrar el modal de Edición
  const handleOpenEditModal = (producto) => {
    setProductoSeleccionado(producto);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setProductoSeleccionado(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Encabezado de la vista */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Gestión del Catálogo</h1>
        <p className="text-sm text-gray-600">
          Administra el inventario maestro, actualiza precios, gramajes y da de alta nuevos productos.
        </p>
      </div>

      {/* Componente principal de la tabla de inventario */}
      <ProductTable
        onOpenCreateModal={handleOpenCreateModal}
        onOpenEditModal={handleOpenEditModal}
      />

      {/* MODAL DE CREACIÓN (Placeholder o componente de formulario) */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Crear Nuevo Producto</h3>
            <p className="text-sm text-gray-600 mb-6">
              Aquí irá el formulario de alta de productos (próxima HU o integración).
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleCloseCreateModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE EDICIÓN (Placeholder o componente de formulario) */}
      {isEditModalOpen && productoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Editar Producto: {productoSeleccionado.nombre}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              SKU actual: <span className="font-semibold">{productoSeleccionado.sku}</span>. Aquí irá el formulario con los datos precargados.
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleCloseEditModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCatalogoView;