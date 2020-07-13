import React from 'react'

import { Layout, Link, SEO } from 'src/components'

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>404 : Not Found</h1>
		<p>Wanna learn about <Link to="https://httpstatuses.com/">HTTP Error Codes</Link> ?</p>
	</Layout>
)

export default NotFoundPage
