'use client';

import { motion } from 'framer-motion';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';


export const experiencesData = [
    {
        date: 'November 2022 - 2026',
        icon: <i className="fas fa-briefcase"></i>,
        title: 'B.E CSE',
        location: 'Sri Eshwar College of Engineering',
        description: 'Learning stuffs with my buddies and working on projects',
    },
    {
        date: 'May - Jun 2024',
        icon: <i className="fas fa-laptop-code"></i>,
        title: 'Full Stack Developer',
        location: '1CloudHub',
        description: 'Built a complete TeleCRM using MERN and integrating twilio',
    },
    {
        date: 'Apr 2024 - Present',
        icon: <i className="fas fa-graduation-cap"></i>,
        title: 'Co Founder',
        location: 'Devoice',
        description: 'Indulged in making software revolutionary products',
    },
];

const Experience = () => {
    return (
        <section id="about" className="mx-auto text-center scroll-mt-[10rem] bg-transparent">
            <span className='font-bold text-3xl p-[2rem] text-white'>Experience</span>
            <VerticalTimeline lineColor="gray">
                {experiencesData.map((exp, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: 'rgba(255, 255, 255, 0.1)', 
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)', 
                                border: '1px solid rgba(0,0,0,0.1)',
                                textAlign: 'left',
                                padding: '1.3rem',
                                color: 'white',
                            }}
                            date={exp.date}
                            icon={exp.icon}
                            iconStyle={{
                                background: '#00c7ff',
                                fontSize: '1.5rem',
                                color: 'white',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)', 
                            }}
                        >
                            <h3 className="font-semibold capitalize text-lg text-white">{exp.title}</h3>
                            <p className="font-normal !mt-0 text-md text-white">{exp.location}</p>
                            <p className="!mt-0 text-sm text-slate-400">{exp.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;
