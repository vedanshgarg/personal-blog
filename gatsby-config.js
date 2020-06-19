module.exports = {
	siteMetadata: {
		title: `Vedansh Garg`,
		description: `Vedansh Garg - My Site`,
		author: `vedansh.garg.7@gmail.com`,
		url: `https://vedansh.netlify.app/`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-root-import`,
		`gatsby-plugin-react-helmet`,
		`gatsby-remark-reading-time`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
					`gatsby-remark-smartypants`,
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Vedansh Garg`,
				short_name: `Vedansh`,
				start_url: `/`,
				background_color: `#43b9b7`,
				theme_color: `#43b9b7`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				anonymize: true,
				trackingId: 'UA-170135490-1',
			},
		},
		`gatsby-theme-waves`,
	],
}
