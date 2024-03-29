import React from 'react'
import PropTypes from 'prop-types'

import theme from '!raw-loader!./scripts/theme.js'

const themeScript = (
	<script
		dangerouslySetInnerHTML={{
			__html: theme,
		}}
	/>
)

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta name="google-site-verification" content="hqRxZKjJzDatNH0k5fhUwNXoIaLDyZNBxd9thx9d4Ik" />
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				<script>
					window.isCurrentThemeDark = true;
				</script>
				{themeScript}
				{props.preBodyComponents}
				<noscript key="noscript" id="gatsby-noscript">
					This app works best with JavaScript enabled.
				</noscript>
				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	)
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}
