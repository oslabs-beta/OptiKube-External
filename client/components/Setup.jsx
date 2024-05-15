import React from "react";

const Setup = () => {
    return (
        <div className="mb-8 opacity-100 mx-auto w-full sm:max-w-fit">
            <div className="relative text-center  md:mx-0 md:w-full">
                <pre className="relative border border-border-gray w-full text-left px-4 py-12 sm:px-8 sm:py-16 rounded-bl-md rounded-br-md bg-off-black overflow-x-auto text-white">
                    {`helm install optikube \\
--repo https://github.com/Optikube/optikube-helm-chart/ \\
--namespace optikube --create-namespace`}
                </pre>
                <div class="text-sm -mt-4 relative z-10 text-white bg-off-black border border-border-gray py-1 px-3 rounded-full mx-auto max-w-max">Install via Helm</div>
            </div>
        </div>
    );
};

export default Setup;