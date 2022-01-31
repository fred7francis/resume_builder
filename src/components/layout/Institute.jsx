import React, { useState } from "react";
import { nanoid } from "nanoid";
import Feild from "./Feild";

const defaultValues = {
    name: "",
    degree: "",
    year: ""
};

const Institute = ({ index, item, addItem, deleteItem, editItem, mode }) => {
    const [institute, setInstitute] = useState(item || { id: nanoid(), ...defaultValues });
    const [isEdit, setIsEdit] = useState(mode === "create");

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInstitute({ ...institute, [name]: value });
    };

    const handleClick = () => {
        if (isEdit)
            editItem(institute)
        setIsEdit(isEdit => !isEdit)
    }

    return (
        <div className="border p-2">
            <div className="d-flex justify-content-between">
                <span className="h5 font-weight-bolder">Institute {index + 1}</span>
                {(mode === "edit") && (
                    <div>
                        <button className="mr-2 btn btn-danger" onClick={() => deleteItem(institute.id)}>
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
                        label="Institution Name"
                        value={institute.name}
                        onChange={handleOnChange}
                        placeholder="Enter Institution Name"
                    />
                </div>
                <div className="col" >
                    <Feild
                        isEdit={isEdit}
                        name="degree"
                        label="Degree"
                        value={institute.degree}
                        onChange={handleOnChange}
                        placeholder="Enter Degree"
                    />
                </div>
                <div className="col">
                    <Feild
                        isEdit={isEdit}
                        name="year"
                        label="Year of Passing"
                        value={institute.year}
                        onChange={handleOnChange}
                        placeholder="Year"
                        type="number"
                        required={true}
                    />
                </div>
            </div>
            {(mode === "create") && (
                <div className="py-2">
                    <button className="mr-2 btn btn-primary" onClick={() => addItem(institute)}>
                        Add Institute
                    </button>
                    <button className=" btn btn-danger" onClick={() => addItem("-")}>
                        Cancel
                    </button>
                </div>
            )}

        </div>
    );
};
export default Institute;
