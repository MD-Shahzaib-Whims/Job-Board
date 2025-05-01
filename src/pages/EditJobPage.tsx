import React from 'react';
import { useParams } from 'react-router-dom';

const EditJobPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Job Posting</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Edit job form will be implemented here for job ID: {id}</p>
      </div>
    </div>
  );
};

export default EditJobPage;