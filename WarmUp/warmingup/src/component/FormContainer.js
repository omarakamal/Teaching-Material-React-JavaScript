import React, {
    useState
} from "react";
import FormComponent from "./FormComponent";


function FormContainer(props) {

    console.log("Inside FomeHooks Functions ")
    let [allState, setAllState] = useState({
        firstName: "",
        lastName: "",
        ageUser: "",
        gender: "",
        location: "",
        vegan: false,
        kosher: false,
        halal: false
    })

    // function handleChange(event) {
    //   console.log("Inside handleChange Functions ")
    //   const { name, value, type, checked } = event.target;
    //   type === "checkbox" ? setAllState({ [name]: checked }) : setAllState({ [name]: value });
    //     }

    const handleChange = (event) => {

        if (event.target.type === 'checkbox') {
            let name = event.target.name
            //let checked = event.target.checked
            [name] = (event.target.checked)
        } else {
            let value = event.target.value;
            let name = event.target.name;
        

        setAllState((prevalue) => {

            return {

                ...prevalue, // Spread syntax	

                [name]: value
            }
        })
    }
    }



    return ( <
        FormComponent handleChange = {
            handleChange
        }
        data = {
            allState
        }
        />
    )
}
export default FormContainer;