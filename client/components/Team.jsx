import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import profile1 from '../images/profiles/profile1.jpeg'
import profile2 from '../images/profiles/profile2.png'
import profile3 from '../images/profiles/profile3.jpeg'
import profile4 from '../images/profiles/profile4.jpeg'
import profile5 from '../images/profiles/profile5.png'
import { useInView } from 'react-intersection-observer';

const TeamMember = ({ name, role, imageUrl, githubUrl, linkedinUrl }) => (
    <div className="flex flex-col items-center w-1/5 text-white mb-12">
        <div className="relative w-40 h-40 rounded-full overflow-hidden flex justify-center items-center bg-gray-300">
            <img src={imageUrl} alt={`Profile of ${name}`} className="w-full h-full object-cover" />
        </div>
        <div className="text-center font-medium text-lg mt-4">{name}</div>
        <div className="text-center text-gray-400">{role}</div>
        <div className="flex justify-center gap-2 mt-4">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <FaGithub className="w-6 h-6 mr-0.5" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <FaLinkedin className="w-6 h-6 ml-0.5" />
                </a>
        </div>
    </div>
);

const Team = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2,    // Trigger when 50% of the component is visible
    });
    const teamMembers = [
        {
            name: 'Andy Guajardo',
            role: 'Software Engineer',
            imageUrl: profile1,
            githubUrl:'https://github.com/andymattgee',
            linkedinUrl: 'https://www.linkedin.com/in/andy-guajardo/'
        },
        {
            name: 'Cheryl Lee',
            role: 'Software Engineer',
            imageUrl: profile2,
            githubUrl:'https://github.com/yli-yanchen',
            linkedinUrl: 'https://www.linkedin.com/in/cherylleech/'
        },
        {
            name: 'George Huang',
            role: 'Software Engineer',
            imageUrl: profile3,
            githubUrl: 'https://github.com/gzfh24',
            linkedinUrl: 'https://www.linkedin.com/in/gzfh/'
        },
        {
            name: 'James Shea',
            role: 'Software Engineer',
            imageUrl: profile4,
            githubUrl: 'https://github.com/Jawshhhhhhhh',
            linkedinUrl: 'https://www.linkedin.com/in/james-r-shea/'
        },
        {
            name: 'Josh Bajarias',
            role: 'Software Engineer',
            imageUrl: profile5,
            githubUrl: 'https://github.com/JamesSheaDev',
            linkedinUrl: 'https://www.linkedin.com/in/joshbajarias/'
        },
    ]
    return (
        <div ref={ref} id='team' className={`transition-opacity duration-700 ease-out ${inView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl text-center text-white mt-20 mb-20">Meet Our Team</h2>
            <div className="ml-12 mr-12 flex justify-evenly items-center text-center px-12">
                {teamMembers.map(member => (
                    <TeamMember key={member.name} {...member} />
                ))}
            </div>
        </div>
    );
};

export default Team;