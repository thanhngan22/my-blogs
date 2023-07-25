const IsElementInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    console.log('rect: ', rect)
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

export default IsElementInViewport;