const AddSections = () => {
  const body = document.querySelector('.blog__main');
  // console.log('inner html: ', body?.innerHTML);
  if (body != null) {
    // console.log('body: ', body);
    // get all h2 tags
    const h2s = body.querySelectorAll('h2');
    // console.log('h2s: ', h2s);
    // create list of sections
    const listSections: string[] = [];
    if (h2s !== null) {
      h2s.forEach((h2, key) => {
        // console.log('name: ', h2.innerHTML);
        // console.log('id: ', h2.id);

        // create a tag
        listSections.push(
          `<li class="--section__item">
            <a href="#${h2.id}" key=${key}  >${h2.innerHTML}</a>
            </li>`,
        );
      });
    }
    // console.log('listSections: ', listSections);
    const sections = document.querySelector('.sections__list');
    if (sections !== null) {
      // console.log('not nUll');
      sections.innerHTML = listSections.join('');
    }
  }
};

export default AddSections;
