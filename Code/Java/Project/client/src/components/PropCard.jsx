import React from 'react';

const PropCard = ({ property }) => {
  const { image, sqft, bed, bath, expenses, rented, rentIncome } = property;

  // Calculate total income if the property is rented
  const totalIncome = rented ? rentIncome - expenses : null;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
      <img className="w-full" src={image} alt="Property" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Property Details</div>
        <p>Sqft: {sqft}</p>
        <p>Bed: {bed}</p>
        <p>Bath: {bath}</p>
        <p className="text-red-500">Expenses:$ {expenses} USD</p> {/* Expenses in red */}
        <p>Rented: {rented ? 'Yes' : 'No'}</p>
        {rented && (
          <p className="text-green-500">Total Income:${totalIncome} USD</p>
        )}
      </div>
    </div>
  );
};

export default PropCard;
