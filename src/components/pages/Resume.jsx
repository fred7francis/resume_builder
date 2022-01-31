import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import ItemList from "../layout/ItemList";
import Institute from "../layout/Institute"
import Company from "../layout/Company"
import PersonalInfo from '../layout/PersonalInfo';
import Skills from '../layout/Skills';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { addResume, updateResume, deleteResume } from '../../actions/resumeActions';
import { nanoid } from 'nanoid';

const defaultPersonalInfo = {
    name: "",
    email: "",
    address: "",
    phone: "",
};

const Resume = ({ resume, addResume, updateResume, deleteResume }) => {

    const [personalInfo, setPersonalInfo] = useState(resume?.personalInfo || defaultPersonalInfo);
    const [institutionList, setInstitutionList] = useState(resume?.institutionList || []);
    const [experienceList, setExperienceList] = useState(resume?.experienceList || []);
    const [skillList, setSkillList] = useState(resume?.skillList || []);
    const [mode, setMode] = useState("")

    const url_split = useRef(null);

    const navigate = useNavigate()
    let location = useLocation();

    useEffect(() => {
        url_split.current = location.pathname.split('/')
        setMode(url_split.current[1])
    }, [location]);


    const handleSave = () => {
        if (mode === "edit")
            updateResume({ id: url_split.current[2], personalInfo, institutionList, experienceList, skillList })
        navigate(`/${mode === "edit" ? "view" : "edit"}/${url_split.current[2]}`)
        console.log(mode);
    }

    const handleCreate = () => {
        const id = nanoid()
        addResume({ id, personalInfo, institutionList, experienceList, skillList })
        navigate(`/view/${id}`)
    }

    const handleDelete = () => {
        if (url_split.current[2])
            deleteResume(url_split.current[2])
        navigate(`/`)
    }

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
            {mode === "create" ? <button className="btn btn-success" onClick={handleCreate}
                disabled={!(institutionList.length && experienceList.length && skillList.length && Object.values(personalInfo).every(x => x !== ""))}>
                Create
            </button> :
                <button className="btn btn-primary" onClick={handleSave}
                    disabled={!(institutionList.length && experienceList.length && skillList.length && Object.values(personalInfo).every(x => x !== "")) && mode === "edit"}>
                    {mode === "edit" ? "Save" : "Edit"}
                </button>
            }
            <button className="btn btn-danger ml-2" onClick={handleDelete}>
                Delete
            </button>
            <Link to="/">
                <button className="btn btn-dark ml-2">
                    Home
                </button>
            </Link>
        </div>
    </div>;
};

export default connect(null, { addResume, updateResume, deleteResume })(Resume);

