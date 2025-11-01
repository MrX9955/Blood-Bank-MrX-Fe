// src/components/Sections/DroneDeliverySection.jsx
import React from 'react';

export const DroneDeliverySection = () => (
    <div id="drone" className="bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-extrabold mb-4 leading-tight">Emergency Drone Delivery</h2>
                <p className="text-lg text-gray-300 mb-6">
                    In critical situations, every second counts. Our innovative drone delivery system bypasses traffic to deliver blood to hospitals and accident sites faster than ever. When a life is on the line, we take to the skies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <div className="bg-red-600 p-4 rounded-lg flex items-center">
                        <svg className="w-8 h-8 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                            <p className="font-bold">Rapid Response</p>
                            <p className="text-sm">Bypass traffic jams</p>
                        </div>
                    </div>
                     <div className="bg-red-600 p-4 rounded-lg flex items-center">
                        <svg className="w-8 h-8 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5a1.125 1.125 0 001.125-1.125V6.75a1.125 1.125 0 00-1.125-1.125H3.375A1.125 1.125 0 002.25 6.75v10.5A1.125 1.125 0 003.375 18.75z" /></svg>
                        <div>
                            <p className="font-bold">Van & Drone Team</p>
                            <p className="text-sm">Coordinated ground and air support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                 <img src="https://placehold.co/500x350/F87171/FFFFFF?text=Medical+Drone+in+Action" alt="Medical drone carrying a blood package" className="rounded-xl shadow-2xl"/>
            </div>
        </div>
    </div>
);