const validation = (data) => {

    let errors = {};

    if(!data.name){
        errors.e2 = "Ingrese un email"
    }
    if(data.name.length >= 18){
        errors.e3 = "El email no puede tener mas de 18 caracteres";
    }
     if(!data.dificult){
        errors.e4 = "El email no puede tener mas de 35 caracteres";
    }
    if(!data.season){
        errors.e5 = "Ingrese un email"
    }
    if(!data.duration){
        errors.e6 = "Ingrese un email"
    }
     
    return errors;
}
export default validation;