//    //Edit Todo
//    function editTodoName(){
//     //Create Input Button for Edit
//         function displayTooltip(){
//             paragraphElThatContainsTodo.append(divTooltipEl)
//         }
//         function hideTooltip(){
//             divTooltipEl.remove()
//         }
//         function saveEdit(){
//             obj.name = paragraphElThatContainsTodo.textContent= editInputEl.value
//             hideTooltip()
//             localStorage.setItem('Todos', JSON.stringify(state.todos))
//             render()
//         }
//         const editInputEl = document.createElement('input')
//         editInputEl.onfocus=displayTooltip
//         editInputEl.onblur =saveEdit
        
//     //Displays input box instead of text when click on edit button
//         editButtonEl.addEventListener('click',(e)=>{
//         // obj.name = paragraphElThatContainsTodo.textContent = prompt('Enter new title for todo')
//         //  obj.name=paragraphElThatContainsTodo.textContent
//         //render()
//         e.stopPropagation()
//         editInputEl.value = obj.name
//         paragraphElThatContainsTodo.textContent = ''
//         paragraphElThatContainsTodo.append(editInputEl)
//         editInputEl.focus()
//     })
    
//     //Displays text with the value contained in the input box instead of input box as soon as 'Enter' is pressed.
//         editInputEl.addEventListener('keydown', (e)=>{
            
//             if(e.key==='Enter'){
//                 saveEdit()
//             }
//         })
//     }
//     editTodoName()


const div = document.querySelector('div.text')

let i =0

while(i<15){
    i++
    const textContentBtn = document.createElement('button')
   textContentBtn.style.background = 'red'
   const addAttributeBtn = document.createElement('button')
   const createElementP  = document.createElement('p')
   createElementP.innerHTML = `const <span id="constName">NameOfConst</span><input id="name"> = <span id="addText">document</span>.<span id="setAtt">createElement</span>('<span id='elementName'>Element</span><input id="elementInput">')
   `
   createElementP.append(addAttributeBtn,textContentBtn)
   const constNameSpan = createElementP.querySelector('#constName')
   const nameInput = createElementP.querySelector('input#name')
   
//    nameInput.style.display = 'none'
   constNameSpan.addEventListener('click',(e)=>{
    function saveEdit(){
        constNameSpan.style.display = 'inline-block'
        constNameSpan.textContent  = nameInput.value
        nameInput.style.display = 'none'
    }
    
       constNameSpan.style.display = 'none'
       nameInput.style.display = 'inline-block'
       nameInput.value = constNameSpan.textContent
       nameInput.addEventListener('keydown', (e)=>{
            
        if(e.key==='Enter'){
            saveEdit()
        }
    })
        nameInput.focus()
        nameInput.onblur= saveEdit
       })
    const elementName = createElementP.querySelector('#elementName')
    const elementInput = createElementP.querySelector('input#elementInput')
    elementName.style.display = 'none'
    elementName.addEventListener('click',(e)=>{
        function saveEdit(){
            elementName.style.display = 'inline-block'
            elementName.textContent  = elementInput.value
            elementInput.style.display = 'none'
        }
        
        elementName.style.display = 'none'
        elementInput.style.display = 'inline-block'
        elementInput.value = elementName.textContent
        elementInput.addEventListener('keydown', (e)=>{
                
            if(e.key==='Enter'){
                saveEdit()
            }
        })
        elementInput.focus()
        elementInput.onblur= saveEdit
        })
        elementInput.addEventListener('click',(e)=>{
            function saveEdit(){
                elementName.style.display = 'inline-block'
                elementName.textContent  = elementInput.value
                elementInput.style.display = 'none'
            }
            
            elementName.style.display = 'none'
            elementInput.style.display = 'inline-block'
            // elementInput.value = elementName.textContent
            elementInput.addEventListener('keydown', (e)=>{
                    
                if(e.key==='Enter'){
                    saveEdit()
                }
            })
            elementInput.focus()
            elementInput.onblur= saveEdit
            })
        
            
            constNameSpan.style.display = 'none'
            nameInput.addEventListener('click',(e)=>{
             function saveEdit(){
                 constNameSpan.style.display = 'inline-block'
                 constNameSpan.textContent  = nameInput.value
                 nameInput.style.display = 'none'
             }
             
                constNameSpan.style.display = 'none'
                nameInput.style.display = 'inline-block'
             //    nameInput.value = constNameSpan.textContent
                nameInput.addEventListener('keydown', (e)=>{
                     
                 if(e.key==='Enter'){
                     saveEdit()
                 }
             })
                 nameInput.focus()
                 nameInput.onblur= saveEdit
                })
    const addTextSpan = createElementP.querySelector('#addText')
    addTextSpan.addEventListener('click',(e)=>{
        function saveEdit(){
            attrSpan.style.display = 'inline-block'
            attrSpan.textContent = attrInput.value
            attrInput.style.display = 'none'
        }
        const lineBreak = document.createElement('br')
        const attrSpan = document.createElement('span')
        attrSpan.textContent = 'Attribute'
        const attrInput = document.createElement('input')
        attrInput.style.display = 'none'
        const valSpan = document.createElement('span')
        valSpan.textContent = 'value'
        const valInput = document.createElement('input')
        valInput.style.display = 'none'
        createElementP.append(lineBreak,constNameSpan.textContent,".setAttribute(","'",attrSpan,attrInput, "',",valSpan,valInput,")")
        attrSpan.addEventListener('click',(e)=>{
            attrSpan.style.display= 'none'
            attrInput.style.display = 'inline-block'
            attrInput.value = attrSpan.textContent
            attrInput.focus()
            attrInput.onblur = saveEdit
            attrInput.addEventListener('keydown', (e)=>{
                
                if(e.key==='Enter'){
                    saveEdit()
                }
            })
        })
        valSpan.addEventListener('click',()=>{
            valSpan.style.display='none'
        })

       })
       const addAttSpan = createElementP.querySelector('#setAtt')
       addAttSpan.addEventListener('click',(e)=>{
        function saveEdit2(){
            valSpan.style.display = 'inline-block'
            valSpan.textContent = valInput.value
            valInput.style.display = 'none'
        }
        const lineBreak = document.createElement('br')

        const valSpan = document.createElement('span')
        valSpan.textContent = 'Content'
        const valInput = document.createElement('input')
        valInput.style.display = 'none'
        createElementP.append(lineBreak,constNameSpan.textContent,'.textContent = ',valSpan,valInput)
               valSpan.addEventListener('click',(e)=>{
                valSpan.style.display= 'none'
                valInput.style.display = 'inline-block'
                valInput.value = valSpan.textContent
                valInput.focus()
                valInput.onblur = saveEdit2
                valInput.addEventListener('keydown', (e)=>{
                    
                    if(e.key==='Enter'){
                        saveEdit2()
                    }
                })
               })
          })
        
       
   div.append(createElementP)
   
   addAttributeBtn.addEventListener('click',()=>{
    function saveEdit(){
        attrSpan.style.display = 'inline-block'
        attrSpan.textContent = attrInput.value
        attrInput.style.display = 'none'
    }
    const lineBreak = document.createElement('br')
    const attrSpan = document.createElement('span')
    attrSpan.textContent = 'Attribute'
    const attrInput = document.createElement('input')
    attrInput.style.display = 'none'
    const valSpan = document.createElement('span')
    valSpan.textContent = 'value'
    const valInput = document.createElement('input')
    valInput.style.display = 'none'
    createElementP.append(lineBreak,constNameSpan.textContent,".setAttribute(","'",attrSpan,attrInput, "',",valSpan,valInput,")")
    attrSpan.addEventListener('click',(e)=>{
        attrSpan.style.display= 'none'
        attrInput.style.display = 'inline-block'
        attrInput.value = attrSpan.textContent
        attrInput.focus()
        attrInput.onblur = saveEdit
        attrInput.addEventListener('keydown', (e)=>{
            
            if(e.key==='Enter'){
                saveEdit()
            }
        })
    })
    function saveEdit1(){
            valSpan.style.display = 'inline-block'
            valSpan.textContent = valInput.value
            valInput.style.display = 'none'
        }
        valSpan.addEventListener('click',(e)=>{
            valSpan.style.display= 'none'
            valInput.style.display = 'inline-block'
            valInput.value = valSpan.textContent
            valInput.focus()
            valInput.onblur = saveEdit1
            valInput.addEventListener('keydown', (e)=>{
                
                if(e.key==='Enter'){
                    saveEdit1()
                }
            })
        })
   })
   textContentBtn.addEventListener('click',()=>{
    function saveEdit2(){
        valSpan.style.display = 'inline-block'
        valSpan.textContent = valInput.value
        valInput.style.display = 'none'
    }
    const lineBreak = document.createElement('br')

    const valSpan = document.createElement('span')
    valSpan.textContent = 'Content'
    const valInput = document.createElement('input')
    valInput.style.display = 'none'
    createElementP.append(lineBreak,constNameSpan.textContent,'.textContent = ',valSpan,valInput)
           valSpan.addEventListener('click',(e)=>{
            valSpan.style.display= 'none'
            valInput.style.display = 'inline-block'
            valInput.value = valSpan.textContent
            valInput.focus()
            valInput.onblur = saveEdit2
            valInput.addEventListener('keydown', (e)=>{
                
                if(e.key==='Enter'){
                    saveEdit2()
                }
            })
           })
   })
   const buttonsDiv = document.querySelector('div.buttons')
   const buttonP = document.createElement('p')
//    buttonsDiv.append(buttonP)
//    buttonP.append(addAttributeBtn,textContentBtn)

}




// div.innerHTML = `<p> const <span>listOfBreweriesH1</span> = document.createElement('<span>h1</span>')</p>
// <p>listOfBreweriesH1.textContent = '<span>List Of Breweries'</span></p>     
// <p>searchHeader.setAttribute('<span></span>class</span>','<span></span>search-bar</span>')</p>`


