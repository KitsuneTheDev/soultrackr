/*
* @param {HTMLElement} marker,
* @param {HTMLElement} scrollContainer,
*/

export function centerMarker(marker, scrollContainer) {
    if(!marker || !scrollContainer) {
        console.log("Marker or scrollContainer can not be found.", " Marker -->", marker, " scrollContainer -->", scrollContainer);
    }

    if(scrollContainer._intersectionObserver) {
        scrollContainer._intersectionObserver.disconnect();
        delete scrollContainer._intersectionObserver;
    }

    const options = {
        root: scrollContainer,
        rootMargin: "0px",
        threshold: 0.0,
    }

    const observerCallback = (entries, observer) => {
        const entry = entries[0];
        if(!entry.isIntersecting) {
            const markerOffsetTop = marker.offsetTop;
            const containerClientHeight = scrollContainer.clientHeight;
            const markerOffsetHeight = marker.offsetHeight;

            const scrollTo = markerOffsetTop - ((containerClientHeight / 2) + markerOffsetHeight / 2);

            scrollContainer.scrollTo({
                top: scrollTo,
            });

            observer.unobserve(marker);
            delete scrollContainer._intersectionObserver;
        } else {
            console.log("Marker is already visible!");
            observer.unobserve(marker);
            delete scrollContainer._intersectionObserver;
        }
    }

    const observer = new IntersectionObserver(observerCallback, options);
    scrollContainer._intersectionObserver = observer;
    observer.observe(marker);
}