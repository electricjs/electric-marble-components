export function dispatchGlobalState() {
	if (window.electricPageComponent) {
		window.electricPageComponent.setState({
			element: '#pageComponent',
			page: page,
			site: data.site
		});
	}
}