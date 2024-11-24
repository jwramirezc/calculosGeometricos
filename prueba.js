import React, { useState } from 'react';
import { Search, Filter, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ServiceCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      category: 'hardware',
      name: 'Soporte de Hardware',
      description: 'Asistencia con problemas de equipos',
      sla: '4 horas',
      priority: 'Alta',
      icon: '🖥️',
    },
    {
      id: 2,
      category: 'software',
      name: 'Instalación de Software',
      description: 'Instalación y configuración de aplicaciones',
      sla: '24 horas',
      priority: 'Media',
      icon: '💿',
    },
    {
      id: 3,
      category: 'network',
      name: 'Soporte de Red',
      description: 'Resolución de problemas de conectividad',
      sla: '2 horas',
      priority: 'Alta',
      icon: '🌐',
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos los Servicios' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'software', name: 'Software' },
    { id: 'network', name: 'Red' },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter(service => service.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Catálogo de Servicios</h1>

        {/* Barra de búsqueda */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar servicios..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <Filter className="w-5 h-5" />
            Filtros
          </button>
        </div>

        {/* Navegación por categorías */}
        <div className="flex gap-4 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{service.icon}</span>
                {service.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">SLA: {service.sla}</span>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                  Ver detalles
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceCatalog;
