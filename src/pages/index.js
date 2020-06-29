import React from 'react'

import {
	Layout,
	Link,
	PostGrid,
	PostLink,
	SEO,
	WaveSection,
} from 'src/components'
import { useWindowWidth } from 'src/hooks'
import { get } from 'src/utils'
import WorkExperience from '../components/WorkExperience'
import TechInfo from '../components/TechInfo'

const IndexPage = ({ data }) => {
	const width = useWindowWidth()
	const isDesktop = width > 1200
	const postCount = isDesktop ? 5 : 3
	const edges = get(data, 'allMdx', 'edges').slice(0, postCount) || []

	return (
		<Layout>
			<SEO title="Home" />
			<WaveSection>
				<h1 className="intro-title">Hello!</h1>
				<p>
					I'm Vedansh Garg, a software engineer, currently working at{' '}
					<Link to="https://oyorooms.com/">OYO</Link>. I build
					highly scaleable web apps & contribute to open source. The Blogs here are by Joe McGrath.
				</p>
				<br />
				<p>
					<Link to="/blog" button>
						Blog
					</Link>
					&nbsp;
					<Link to="/projects" secondary button>
						Projects
					</Link>
					&nbsp;
					<Link to="/joe-mcgrath-resume.pdf" external secondary button>
						Resume <span style={{fontSize: '85%'}}>⬇</span>
					</Link>
				</p>
			</WaveSection>
			<WorkExperience/>
			<WaveSection>
				<TechInfo/>
			</WaveSection>
			{edges.length ? (
				<>
					<h2>Featured Blog Posts</h2>
					<PostGrid wide>
						{edges.map((edge, i) => (
							<PostLink
								key={edge.node.id}
								featured={
									isDesktop
										? edge.node.frontmatter.tags.includes(
										'home-featured'
										)
										: i === 0
								}
								post={edge.node}
							/>
						))}
					</PostGrid>
				</>
			) : null}
		</Layout>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query {
		allMdx(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 5
			filter: { frontmatter: { tags: { in: ["home"] } } }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						featuredImage {
							childImageSharp {
								fluid {
									src
								}
							}
						}
						path
						title
						subtitle
						tags
					}
					fields {
						readingTime {
							text
						}
					}
				}
			}
		}
	}
`
