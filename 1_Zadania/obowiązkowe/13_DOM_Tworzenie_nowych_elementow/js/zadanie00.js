const deleteButton = document.querySelectorAll('.deleteBtn')

deleteButton.forEach(button => {
    button.addEventListener("click", function(){
        let _parent = this.parentElement.parentElement
        let table = _parent.parentElement

        table.removeChild(_parent)
    })
});