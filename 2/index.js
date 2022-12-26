const form=document.querySelector('form');

class Cat {
    constructor({ catname, breed, sex, wet, dry, mixed }) {
        this.catname = catname;
        this.breed = breed;
        this.wet = wet;
        this.dry = dry;
        this.mixed = mixed;
        this.sex = sex;
       
    }

    getCat() {
        console.log(this)
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);

    let catname = data.get('catname');
    let breed = data.get('breed');
    let dry = data.get('dry');
    let wet = data.get('wet');
    let mixed = data.get('mixed');
    let sex = data.get('sex');

    let cat = new Cat({ catname, breed, dry, wet, mixed, sex}) //деструктуризация объекта
    cat.getCat()
})