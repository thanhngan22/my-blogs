import IsElementInViewport from "./IsElementInViewport";

const UpdateHighlightedSection = (sectionLinks : any, aTags : any ) => {
    console.log('UpdateHighlightedSection');
    for (const [index, section] of sectionLinks.entries()) {
        if (IsElementInViewport(section)) {
            console.log("aTAGS: ", aTags);
            console.log("currently view: ", section);

            // add class to highlight section and remove class from other sections
            aTags.forEach((tag : HTMLElement) => tag.classList.remove('--highlighted'));
            aTags[index].classList.add('--highlighted');
            console.log('aTags[index]: ', aTags[index]);
            break;
        }
    }
}

export default UpdateHighlightedSection;