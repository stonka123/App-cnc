import { toolsOption, materialsOption } from '../data.js';
export const render = () => {
    const SelectKindTooling = document.querySelector('.kind');
    const SelectKindMaterial = document.querySelector('.material');
    toolsOption.forEach(option => {
        const optionElement = document.createElement('option');
        const elementToolDisabled = document.getElementsByClassName('kind').item(0);
        optionElement.setAttribute('value', `${option.vc}`);
        optionElement.innerText = option.text;
        SelectKindTooling.appendChild(optionElement);
        elementToolDisabled.children[0].setAttribute('disabled', '');
        elementToolDisabled.children[0].setAttribute('selected', '');
    });
    materialsOption.forEach(option => {
        const optionMateirlaElement = document.createElement('option');
        const elementMaterialDisabled = document.getElementsByClassName('material').item(0);
        optionMateirlaElement.setAttribute('value', `${option.value}`);
        optionMateirlaElement.innerText = option.text;
        SelectKindMaterial.appendChild(optionMateirlaElement);
        elementMaterialDisabled.children[0].setAttribute('disabled', '');
        elementMaterialDisabled.children[0].setAttribute('selected', '');
    });
};
