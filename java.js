console.log("Connected")

// stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

let imagePicker = document.getElementById('imagePicker');
    let imagePreview = document.getElementById('imagePreview');
    imagePicker.addEventListener('change', function() {
        let file = this.files[0];
        if (file) {
            let objectURL = URL.createObjectURL(file);
            imagePreview.src = objectURL;
            imagePreview.onload = () => URL.revokeObjectURL(objectURL);
        }
    });