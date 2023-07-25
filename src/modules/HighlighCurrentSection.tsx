import UpdateHighlightedSection from "./UpdateHighlightedSection";

const HighlightCurrentSection = () => {
    const aTags = document.querySelectorAll('.--section__item a');
    console.log('aTags: ', aTags);
    if (aTags.length !== 0) {
        const sectionLinks = Array.from(aTags).map(link => {
            const targetID = link.getAttribute('href') as string;
            console.log('targetID: ', targetID);
            return document.getElementById(targetID.slice(1));
        })
        console.log('sectionLinks: ', sectionLinks);

        const body = document.querySelector('.content__wrapper');
        console.log('body: ', body);

        body?.addEventListener('scroll', () => {
            console.log('scroll');
            UpdateHighlightedSection(sectionLinks, aTags);
        });

        // initial call
        UpdateHighlightedSection(sectionLinks, aTags);

    }
}

export default HighlightCurrentSection;