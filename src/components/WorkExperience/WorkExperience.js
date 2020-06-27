import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Icon from './Icon'

import "./styles.css";
import workexp from './workexp'

const WorkExperience = () => (
	<>
		<h2> Work Experience</h2>
		<VerticalTimeline animate={false} className="work-ex" >
			{[...workexp].reverse().map((exp)=>(
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'var(--primary)', color: 'var(--dark)', boxShadow: '0px 0px 10px #00000025' }}
					contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}
					date={exp.date}
					dateClassName="work-ex-date"
					iconStyle={{ background: exp.background , color: '#fff' }}
					icon={<Icon src={exp.iconSrc} padding={exp.iconPadding}/>}
				>
					<h3 className="vertical-timeline-element-title">{exp.title}</h3>
					<h5 className="vertical-timeline-element-subtitle">{exp.subtitle}</h5>
					<p>
						{exp.description}
					</p>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	</>
)

export default WorkExperience
