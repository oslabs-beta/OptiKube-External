import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Ensure you have react-icons installed

const TeamMember = ({ name, role, imageUrl, githubUrl, linkedinUrl }) => (
    <div className="team-member">
        <div className="profile-circle">
            <img src={imageUrl} alt={`Profile of ${name}`} style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="name">{name}</div>
        <div className="role-title">{role}</div>
        <div className="icons">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
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
            <h2>Meet Our Team</h2>
            <div id="team">
                {teamMembers.map(member => (
                    <TeamMember key={member.name} {...member} />
                ))}
            </div>
        </>
    )
};

export default Team;