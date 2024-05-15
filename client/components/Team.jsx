import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Ensure you have react-icons installed

const TeamMember = ({ name, role, imageUrl, githubUrl, linkedinUrl }) => (
    <div className="flex flex-col items-center w-1/5 text-white">
        <div className="relative w-40 h-40 rounded-full overflow-hidden flex justify-center items-center bg-gray-300">
            <img src={imageUrl} alt={`Profile of ${name}`} className="w-full h-full object-cover" />
        </div>
        <div className="text-center font-medium text-lg mt-2">{name}</div>
        <div className="text-center text-gray-400">{role}</div>
        <div className="flex justify-center gap-2 mt-2">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <FaGithub className="w-6 h-6" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <FaLinkedin className="w-6 h-6" />
                </a>
        </div>
    </div>
);

const Team = () => {
    const teamMembers = [
        {
            name: 'Andy Guajardo',
            role: 'Software Engineer',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHI3BJiB7lkVxhKUKI8YxJoTrGDInnZI3gzhmvAZEGA&s',
            linkedinUrl: 'https://linkedin.com'
        },
        {
            name: 'Cheryl Lee',
            role: 'Software Engineer',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHI3BJiB7lkVxhKUKI8YxJoTrGDInnZI3gzhmvAZEGA&s',
            linkedinUrl: 'https://linkedin.com'
        },
        {
            name: 'George Huang',
            role: 'Software Engineer',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHI3BJiB7lkVxhKUKI8YxJoTrGDInnZI3gzhmvAZEGA&s',
            linkedinUrl: 'https://linkedin.com'
        },
        {
            name: 'James Shea',
            role: 'Software Engineer',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHI3BJiB7lkVxhKUKI8YxJoTrGDInnZI3gzhmvAZEGA&s',
            linkedinUrl: 'https://linkedin.com'
        },
        {
            name: 'Josh Bajarias',
            role: 'Software Engineer',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHI3BJiB7lkVxhKUKI8YxJoTrGDInnZI3gzhmvAZEGA&s',
            linkedinUrl: 'https://linkedin.com'
        },
    ]
    return (
        <>
            <h2 className="text-4xl text-center text-white mt-8 mb-8">Meet Our Team</h2>
            <div className="flex justify-evenly items-center text-center px-12" id="team">
                {teamMembers.map(member => (
                    <TeamMember key={member.name} {...member} />
                ))}
            </div>
        </>
    );
};

export default Team;