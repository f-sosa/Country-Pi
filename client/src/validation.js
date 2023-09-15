const validation = (data) => {

    let errors = {};

    if(!data.name){
        errors.e1 = "Enter a name!"
    }
    if(!data.season){
        errors.e2 = "Choose some season!"
    }
    if(!data.duration){
        errors.e3 = "Choose some duration!"
    }
     
    return errors;
}
export default validation;