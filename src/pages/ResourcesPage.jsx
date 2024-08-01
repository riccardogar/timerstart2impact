import React from "react";
import { resources } from "../data/resources";

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-16 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Meditation Resources
        </h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          Explore our collection of resources to deepen your meditation
          practice.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="bg-white flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-center">
                  {resource.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
