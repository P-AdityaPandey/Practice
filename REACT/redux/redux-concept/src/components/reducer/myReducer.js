const initialData ={
    name :" ",
};

const myReducer=(state = initialData, action) =>{
   // alert("Reducer Triggered")


   if (action.type ==="NAME"){
    state ={
        name : action.nameComp
    }
   }
    return state;
};

export default myReducer;