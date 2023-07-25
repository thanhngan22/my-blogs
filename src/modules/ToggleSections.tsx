

const ToggleSections = () => {
    const sections = document.querySelector('.sections__wrapper');
    const bar = sections?.querySelector('.bar');
    const sectionsList = sections?.querySelector('.sections__list');
    // console.log('sections: ', sections);

    if (sections !== null &&  bar !== null && sectionsList !== null) {
        // console.log("bar: ", bar);
        if (sectionsList?.innerHTML === '') {
            bar?.classList.add('hidden');

            
        } else {
            bar?.classList.remove('hidden');
        }
    }

}

export default ToggleSections;