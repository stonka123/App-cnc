import { toolsOption, materialsOption } from '../data.js';
export const render = () => {
    const SelectKindTooling = document.querySelector('.kind');
    const SelectKindMaterial = document.querySelector('.material');
    toolsOption.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', `${option.vc}`);
        optionElement.innerText = option.text;
        SelectKindTooling.appendChild(optionElement);
    });
    materialsOption.forEach(option => {
        const optionMateirlaElement = document.createElement('option');
        const elementDisabled = document.getElementsByClassName('material').item(0);
        optionMateirlaElement.setAttribute('value', `${option.value}`);
        optionMateirlaElement.innerText = option.text;
        SelectKindMaterial.appendChild(optionMateirlaElement);
        elementDisabled.children[0].setAttribute('disabled', '');
        elementDisabled.children[0].setAttribute('selected', '');
    });
};
