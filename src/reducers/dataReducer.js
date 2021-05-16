const dataReducer = (state, action) => {
    switch (action.type) {
        case 'EDIT_ITEM':
            var inputs = document.getElementsByClassName('input-item');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false;
            }

            var textfield = document.getElementsByClassName('tox-tinymce');
            if (textfield.nodeType == 1) {
                textfield.setAttribute("aria-disabled", false);
                textfield.classList.remove('tox-tinymce--disabled');
            }

            return state;

        default:
            return state;
    }
}

export default dataReducer;