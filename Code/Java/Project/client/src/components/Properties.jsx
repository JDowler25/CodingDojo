import React from 'react'
import SideNavBar from './SideNavBar';
import Header from './Header';
import PropCard from './PropCard';

const Properties = () => {
    // Example data; replace this with your actual data
    const properties = [
        {
            image: 'path/to/your/image.jpg', // Replace with actual image path
            sqft: 1200,
            bed: 3,
            bath: 2,
            expenses: 500,
            rented: true,
            rentIncome: 1500, // New field
        },
        // ... more property objects
    ];
    return (
        <div className="flex h-screen w-screen bg-gray-100">
            {/* Sidebar */}
            <div className="bg-sidebar-bg text-white w-52 flex-shrink-0">
                <SideNavBar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden bg-f0f0f7">
                {/* Header */}
                <Header />
                {/* Main Content */}
                <main className="flex-grow flex flex-col items-center justify-center bg-f0f0f7 p-4 mx-auto">
                    <h1 className="text-2xl font-bold mb-4">Properties</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {properties.map((property, index) => (
                            <PropCard key={index} property={property} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Properties