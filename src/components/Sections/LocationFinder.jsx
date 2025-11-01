// src/components/Sections/LocationFinder.jsx
import React, { useState, useEffect } from 'react';
import { indianHospitals } from '../../data/mockData.js';

export const LocationFinder = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredHospitals, setFilteredHospitals] = useState(indianHospitals);

    useEffect(() => {
        const results = indianHospitals.filter(hospital =>
            hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            hospital.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            hospital.state.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHospitals(results);
    }, [searchTerm]);

    return (
        <div id="finder" className="bg-red-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Find Blood Banks & Hospitals</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">Search for hospitals across India. Connect with them for your blood requirements instantly.</p>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-6">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Search by hospital name, city, or state..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                            />
                            <svg className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="h-96 overflow-y-auto pr-2 space-y-3">
                            {filteredHospitals.map((hospital, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg text-left hover:bg-red-100 transition">
                                    <h4 className="font-bold text-gray-800">{hospital.name}</h4>
                                    <p className="text-sm text-gray-600">{hospital.city}, {hospital.state}</p>
                                    <div className="flex space-x-2 mt-2">
                                        {hospital.bloodGroups.map(bg => (
                                            <span key={bg} className="text-xs font-bold text-red-700 bg-red-200 px-2 py-1 rounded-full">{bg}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-gray-300 rounded-xl shadow-lg flex items-center justify-center min-h-[300px] md:min-h-0">
                           <img src="https://placehold.co/600x400/DB2777/FFFFFF?text=Interactive+Map+of+India" alt="Map of India with hospital locations" className="rounded-xl w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    );
};