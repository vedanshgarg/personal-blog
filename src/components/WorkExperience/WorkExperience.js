import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "./styles.css";

const WorkExperience = () => (
	<>
		<h2> Work Experience</h2>
		<VerticalTimeline animate={false} className="work-ex" >
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'var(--primary)', color: 'var(--dark)', boxShadow: '0px 0px 10px #00000025' }}
				contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}
				date="Jan 2020 - present"
				dateClassName="work-ex-date"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				// icon={<WorkIcon />}
			>
				<h3 className="vertical-timeline-element-title">Oyo Rooms</h3>
				<h5 className="vertical-timeline-element-subtitle">Software Development Engineer</h5>
				<p>
					Creative Direction, User Experience, Visual Design, Project Management, Team Leading
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'var(--primary)', color: 'var(--dark)', boxShadow: '0px 0px 10px #00000025' }}
				contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}
				date="May 2019 - July 2019"
				dateClassName="work-ex-date"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				// icon={<WorkIcon />}
			>
				<h3 className="vertical-timeline-element-title">Coding Ninjas</h3>
				<h5 className="vertical-timeline-element-subtitle">Software Development Intern</h5>
				<p>
					Creative Direction, User Experience, Visual Design, SEO, Online Marketing
				</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	</>
)

export default WorkExperience
