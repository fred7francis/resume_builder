import React, { useState } from "react";
import { nanoid } from "nanoid";
import Feild from "./Feild";

const defaultValues = {
    name: "",
    title: "",
    year: ""
};

const Company = ({ index, item, addItem, deleteItem, editItem, mode }) => {
    const [company, setCompany] = useState(item || { id: nanoid(), ...defaultValues });
    const [isEdit, setIsEdit] = useState(mode === "create");

    const handleOnChange = event => {
        const { name, value } = event.target;
        setCompany({ ...company, [name]: value });
    };

    const handleClick = () => {
        if (isEdit)
            editItem(company)
        setIsEdit(isEdit => !isEdit)
    }

    return (
        <div className="border p-2">
            <div className="d-flex justify-content-between">
                <span className="h5 font-weight-bolder">Company {index + 1}</span>
                {(mode === "edit") && (
                    <div>
                        <button className="mr-2 btn btn-danger" onClick={() => deleteItem(company.id)}>
                            Delete
                        </button>
                        <button className="btn btn-primary" onClick={handleClick}>
                            {isEdit ? "Save" : "Edit"}
                        </button>
                    </div>
                )}
            </div>

            <div className="row">
                <div className="col">
                    <Feild
                        isEdit={isEdit}
                        name="name"
                        label="Company Name"
                        value={company.name}
                        onChange={handleOnChange}
                        placeholder="Enter Comapany Name"
                    />
                </div>
                <div className="col" >
                    <Feild
                        isEdit={isEdit}
                        name="title"
                        label="Title"
                        value={company.title}
                        onChange={handleOnChange}
                        placeholder="Enter Title"
                    />
                </div>
                <div className="col">
                    <Feild
                        isEdit={isEdit}
                        name="year"
                        label="Joining Year"
                        value={company.year}
                        onChange={handleOnChange}
                        placeholder="Year"
                        type="number"
                        required={true}
                    />
                </div>
            </div>
            {(mode === "create") && (
                <div className="py-2">
                    <button className="mr-2 btn btn-primary" onClick={() => addItem(company)}>
                        Add Company
                    </button>
                    <button className=" btn btn-danger" onClick={() => addItem("-")}>
                        Cancel
                    </button>
                </div>
            )}

        </div>
    );
};
export default Company;
