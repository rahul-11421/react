// function customRender(reactElements, rootContainer) {
//     const tag = document.createElement(reactElement.type)
//     tag.setAttribute('href',reactElement.props.href)
//     tag.setAttribute('target',reactElement.props.target)
//     tag.innerHTML = reactElement.children;
//     rootContainer.appendChild(tag)
// };

// version 2 with loo to get the attributes

function customRender(reactElement, rootContainer){
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    for (prop in reactElement.props) {
        element.setAttribute(prop, reactElement.props[prop])
        }
    rootContainer.appendChild(element)

    };


const reactElement = {
    type:'a',
    props:{
        href : "http://google.com",
        terget: '_blank',
    },
    children : "Click to visit google"
}



const rootContainer = document.getElementById("root")
console.log(rootContainer)



 // Need to render the elements, so create a method thet injects in root

 customRender(reactElement, rootContainer)






