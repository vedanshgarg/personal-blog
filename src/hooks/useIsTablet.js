import useWindowWidth from './useWindowWidth'

export default function useIsTablet() {
	const width = useWindowWidth()
	return width && width < 800
}
