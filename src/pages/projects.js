import React from 'react'
import styled from 'styled-components'

import SpanTreeDemo from "../images/project/SpanTreeDemo.gif"

import {
	Icon,
	Layout,
	Link,
	QueryImage,
	SEO,
	Small,
	WaveSection,
} from 'src/components'

const Projects = styled.div`
	section {
		padding: calc(2rem + 1vw) 0;

		> :first-child {
			margin-top: 0;
		}
	}
`

const ProjectsPage = () => (
	<Layout activePage="projects">
		<SEO title="Projects" />

		{/*Enable this Wave section when number of projects is odd*/}
		{/*<WaveSection>*/}
		{/*	<p>*/}
		{/*		Here's a brief introduction to some of the projects I've built*/}
		{/*		or made significant contributions to! More details about some of*/}
		{/*		the most interesting parts of the projects coming soon...*/}
		{/*	</p>*/}
		{/*</WaveSection>*/}

		<Projects>

			<WaveSection as="section">
				<h3><QueryImage
					name="SpanTreeIcon"
					style={{
						display: 'inline-block',
						marginRight: '10px',
						verticalAlign: 'middle',
						width: 64,
					}}
				/>{' '}Span-Tree</h3>
				<br/>
				<a href="https://chrome.google.com/webstore/detail/spantree-gitlab-tree/gcjikeldobhnaglcoaejmdlmbienoocg">
					<img src="https://img.shields.io/chrome-web-store/users/gcjikeldobhnaglcoaejmdlmbienoocg?style=for-the-badge"/>
				</a>
				&nbsp;&nbsp;
				<a href="https://chrome.google.com/webstore/detail/spantree-gitlab-tree/gcjikeldobhnaglcoaejmdlmbienoocg">
					<img src="https://img.shields.io/github/stars/tavyandy97/span-tree?color=red&style=for-the-badge"/>
				</a>
				&nbsp;&nbsp;
				<a href="https://reactjs.org/">
					<img src="https://img.shields.io/badge/Made%20With-React-%2340D8FC?color=dodgerblue&logo=react&style=for-the-badge"/>
				</a>
				&nbsp;&nbsp;
				<a href="https://chrome.google.com/webstore/detail/spantree-gitlab-tree/gcjikeldobhnaglcoaejmdlmbienoocg">
					<img src="https://img.shields.io/chrome-web-store/v/gcjikeldobhnaglcoaejmdlmbienoocg?style=for-the-badge"/>
				</a>
				&nbsp;&nbsp;
				<a href="https://chrome.google.com/webstore/detail/spantree-gitlab-tree/gcjikeldobhnaglcoaejmdlmbienoocg">
					<img src="https://img.shields.io/amo/v/spantree-gitlab-tree?style=for-the-badge"/>
				</a>
				<img src={SpanTreeDemo} />
				<p>
					Making GitLab smarter. An Octotree alternative for GitLab. SpanTree makes navigating a GitLab repository feel like a breeze by providing a familiar tree structure.
				</p>
				<p>
					🌳 Easy to navigate tree structure<br/>
					🌳 Resize the tree to your convenience<br/>
					🌳 Supports self-hosted GitLab instances<br/>
					🌳 Compatibility mode for GitLab v12 and less<br/>
					🌳 Lazy loaded for a fast responsive user interface<br/>
					🌳 Inbuilt Dark Theme for GitLab<br/>
					🌳 Quick Search your Repository (Ctrl/⌘ + P)<br/>
					🌳 Auto-Theme (Picks color from GitLab theme)<br/>
				</p>
				<p>
					It is an actively maintained always free open-source project written in React.
				</p>
				<Small>
					<Link
						to="https://chrome.google.com/webstore/detail/spantree-gitlab-tree/gcjikeldobhnaglcoaejmdlmbienoocg"
						button
					>
						Chrome
					</Link>
					&nbsp;
					<Link
						to="https://addons.mozilla.org/en-GB/firefox/addon/spantree-gitlab-tree/"
						secondary
						button
					>
						Mozilla
					</Link>
					&nbsp;
					<Link
						to="https://github.com/tavyandy97/span-tree"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
				<h3>2048</h3>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</p>
				<p>
					It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
				<Small>
					<Link
						to="https://vedanshgarg.github.io/2048/"
						button
					>
						Website
					</Link>
					&nbsp;
					<Link
						to="https://github.com/vedanshgarg/2048"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

		</Projects>
	</Layout>
)

export default ProjectsPage
