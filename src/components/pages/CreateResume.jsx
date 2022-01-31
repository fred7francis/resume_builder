import React, { useEffect, useState } from 'react';
import ItemList from "../layout/ItemList";
import Institute from "../layout/Institute"
import Company from "../layout/Company"
import PersonalInfo from '../layout/PersonalInfo';
import Skills from '../layout/Skills';
import { useLocation, useParams } from 'react-router-dom';

const defaultPersonalInfo = {
    name: "",
    email: "",
    address: "",
    phone: "",
};

const CreateResume = () => {
    const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
    const [institutionList, setInstitutionList] = useState([]);
    const [experienceList, setExperienceList] = useState([]);
    const [skillList, setSkillList] = useState([]);
    const [mode, setMode] = useState("view")

    let location = useLocation();
    let params = useParams();

    useEffect(() => {
        console.log(location.pathname.split('/'))
        setMode(location.pathname.split('/')[1])
        console.log(params)
        console.log(window.location);
    }, []);


    return <div>
        <PersonalInfo mode={mode} personalInfo={personalInfo} onChange={setPersonalInfo} />
        <ItemList
            data={institutionList}
            onChange={setInstitutionList}
            mode={mode}
            name={"Education"}
            passedItem={Institute}
        />
        <ItemList
            data={experienceList}
            onChange={setExperienceList}
            mode={mode}
            name={"Experience"}
            passedItem={Company}
        />
        <Skills
            mode={mode}
            skillList={skillList}
            onChange={setSkillList}
        />
        <div className="d-flex justify-content-end my-5">
            {mode === "create" && <button className="btn btn-success mr-2" onClick={() => setMode("view")}>
                Save
            </button>}
            <button className="btn btn-primary" onClick={() => setMode("edit")}>
                Edit
            </button>
        </div>
    </div>;
};

export default CreateResume;
