import React from "react";

class Form extends React.Component {
    render() {
        return(
            <div className="myFormContainer">
                <form className="myForm">
                    <div className="myFormField">
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="myFormField">
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;