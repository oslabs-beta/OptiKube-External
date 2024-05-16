import React from 'react';
import { useInView } from 'react-intersection-observer';

const Features = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3,    // Trigger when 50% of the component is visible
    });
    return (
        <div ref={ref} id='features' className={`transition-opacity duration-700 ease-out ${inView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl text-center text-white p-12 mb-8">Core Features</h2>
            <div className="flex items-center justify-center m-8 h-1/2">
                <div className="flex flex-col items-center justify-center relative border border-border-gray text-white w-5/12 h-full mr-8 ml-24 p-16 bg-off-black">
                    <h2 className="text-5xl mb-5">Event-Driven Autoscaling</h2>
                    <p className="text-gray-400 text-lg leading-6">Integrates with Kubernetes Event-driven Autoscalers (KEDA) to dynamically adjust pod counts based on user-defined optimization settings and workload demands.</p>
                </div>
                <div className="flex flex-col items-center justify-center relative border border-border-gray text-white w-5/12 h-full mr-24 p-16 bg-off-black">
                    <h2 className="text-5xl mb-5">Automated Resource Optimization</h2>
                    <p className="text-gray-400 text-lg leading-6">Queries Kubecost data hourly to adjust resources, ensuring optimal performance and cost efficiency for deployments managed by OptiKube.</p>
                </div>
            </div>
            <div className="flex items-center justify-center m-8 h-1/2">
                <div className="flex flex-col items-center justify-center relative border border-border-gray text-white w-5/12 h-full mr-8 ml-24 p-16 bg-off-black">
                    <h2 className="text-5xl mb-5">Cost and Resource Visualizations</h2>
                    <p className="text-gray-400 text-lg leading-6">Provides comprehensive graphs and visuals that display cost breakdowns, resource usage, and resource efficiency across various deployments.</p>
                </div>
                <div className="flex flex-col items-center justify-center relative border border-border-gray text-white w-5/12 h-full mr-24 p-16 bg-off-black">
                    <h2 className="text-5xl mb-5">Scaler Management</h2>
                    <p className="text-gray-400 text-lg leading-6">Allows users to easily create and manage KEDA scalers with customizable optimization priorities, including application criticality and workload variability, through the frontend interface.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
