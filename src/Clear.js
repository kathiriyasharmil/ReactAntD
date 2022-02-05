import axios from "axios"
import React, { useState, useEffect } from "react";
import { Form, Row } from 'reactstrap';
import { Empty, notification, Divider, Space, Progress } from 'antd';
import { RadiusUprightOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/Sbtn.css";
import "./App.css";
import Logo from "./photos/my.png"
import DefaultImg from "./photos/my2.jpg"
import Name from "./component/Name";
import Age from "./component/Age";
import Email from "./component/Email";
import Country from "./component/Country";
import Gender from "./component/Gender";
import Language from "./component/Language";
import Photo from "./component/Photo";
import Card from "./component/Card";
import Submit from "./component/Submit";
import Thead from "./component/Thead"
import Tbody from "./component/Tbody";

const defaultInputValue = {
    id: "",
    name: "",
    age: "",
    email: "",
    country: "",
    gender: "",
    language: [],
    photo: DefaultImg,
    index: "",
    check: 0
}
const defaultError = {
    name: "",
    age: "",
    email: "",
    country: "",
    gender: "",
    language: "",
    index: ""
}
const cl = console.log

const Context = React.createContext({ name: "" });

const Clear = () => {

    const [inputValue, setInputValue] = useState(defaultInputValue)
    const [dataStore, setDataStore] = useState([]);
    const [duplicateDataStore, setDuplicateDataStore] = useState([]);
    const [error, setError] = useState(defaultError)
    const [api, contextHolder] = notification.useNotification();
    const { name, age, email, country, gender, language } = inputValue;
    const [per, setPer] = useState(0)

    const change = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    const openNotification = (placement, no) => {
        api.info({
            message: `${no}, successfully updated the details.`,
            description: <Context.Consumer>{({ name }) => `Welcome, ${inputValue.name}!`}</Context.Consumer>,
            placement,
        });
    };

    const incr = (i) => {
        const val = i
        setPer(per + val)
    }

    const submit = (e) => {
        debugger
        e.preventDefault();
        if (!errors(e)) return
        if (inputValue.check === 0) {
            debugger
            inputValue.id = new Date().getTime().toString()
            setDataStore([...dataStore]);
            setDuplicateDataStore([...duplicateDataStore]);
        } else {
            (async () => {
                debugger
                await axios.put(`http://localhost:3000/DataStore/${inputValue.id}`, inputValue)
                    .then(response => {
                        debugger
                        const data = dataStore.map((enter) => {
                            debugger
                            if (enter.id === inputValue.id) {
                                return inputValue
                            }
                            return enter
                        })
                        setDataStore(data)
                        openNotification('topRight', inputValue.name)
                    })
                    .catch(error => cl(error))
                setInputValue(defaultInputValue)
            })()
            checkApi();
        }
    }

    useEffect(() => {
        debugger
        if (inputValue.name !== "") {
            (async (e) => {
                await axios.post(`http://localhost:3000/DataStore`, inputValue)
                    .then(response => {
                        setDataStore([...dataStore, response.data]);
                        setDuplicateDataStore([...duplicateDataStore, response.data]);
                    })
                    .catch(error => cl(error))
            })()
        }
        setInputValue(defaultInputValue)
    }, [dataStore])

    useEffect(() => { checkApi(); }, [])

    function checkApi() {
        axios.get(`http://localhost:3000/DataStore`)
            .then(response => {
                setDataStore(response.data);
                setDuplicateDataStore(response.data)
            })
            .catch(error => cl(error))
    };

    const search = (e) => {
        let name = e.target.value;
        if (name) {
            const search = dataStore.filter(data => data.name.toLowerCase().includes(name.toLowerCase()));
            setDataStore(search);
        } else {
            setDataStore(duplicateDataStore);
        }
    };

    const Edit = (id) => {
        axios.get(`http://localhost:3000/DataStore/${id}`)
            .then(response => {
                const { id, name, age, email, country, gender, language, photo, i } = response.data
                setInputValue({
                    ...inputValue,
                    id,
                    name,
                    age,
                    email,
                    country,
                    gender,
                    language,
                    photo,
                    index: i,
                    check: 1
                })
            })
            .catch(error => cl(error))
    }

    const Delete = (id) => {
        debugger
        setDataStore(dataStore.filter(check => check.id !== id))
        axios.delete(`http://localhost:3000/DataStore/${id}`)
            .then(cl(id, "delete"))
            .catch(error => cl(error))
    }

    const selectLanguage = (e) => {
        const { value } = e.target
        if (inputValue.language.includes(value)) {
            const setLanguage = inputValue.language.filter(change => change !== value)
            setInputValue({ ...inputValue, language: setLanguage })
        } else {
            setInputValue({ ...inputValue, language: [...inputValue.language, value] })
        }
    }

    const photo = (e) => {
        let img = e.target.files[0];
        setInputValue({ ...inputValue, photo: URL.createObjectURL(img) })
    }

    const errors = (e) => {
        debugger
        var nv = /^[A-Z a-z ]+$/;
        var av = /^[0-9]+$/;
        var mailvalid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const name = nv.test(inputValue.name)
        const age = av.test(inputValue.age)
        const email = mailvalid.test(inputValue.email)
        if (inputValue.name === "") {
            setError({ name: "Please enter your Name", age: "", email: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.name.length > 35) {
            setError({ name: "Please Enter Full Name max 20 letters", age: "", email: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.name.length < 3) {
            setError({ name: "Please Enter Full Name mini 3 letters", age: "", email: "", country: "", gender: "", language: "" })
            return false;
        } if (!name) {
            setError({ name: "Please enter valide Name", age: "", email: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.age === "") {
            setError({ age: "Please enter your age ", name: "", email: "", country: "", gender: "", language: "" })
            return false;
        } if (!age) {
            setError({ age: "Please enter Onley Number ", name: "", email: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.age.length > 2) {
            setError({ age: "Please enter your age not your grandpa age ", name: "", email: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.age.length === 0) {
            setError({ age: "Please enter your age ", name: "", email: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.email === "") {
            setError({ email: "Please enter your Email ", name: "", age: "", country: "", gender: "", language: "" })
            return false;
        } if (!email) {
            setError({ email: "Please enter your email address", name: "", age: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.email.length < 12) {
            setError({ email: "Please enter valide email address ", name: "", age: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.email.length > 45) {
            setError({ email: "Please enter your Email max 45 letters ", name: "", age: "", country: "", gender: "", language: "" })
            return false;
        } if (inputValue.country === "") {
            setError({ country: "Please select your country", name: "", age: "", email: "", gender: "", language: "" })
            return false;
        } if (inputValue.gender === "") {
            setError({ gender: "Please select your Gender", name: "", age: "", email: "", country: "", language: "" })
            return false;
        } if (inputValue.language === "") {
            setError({ language: "Please select your any one spoken language ", name: "", age: "", email: "", country: "", gender: "" })
            return false;
        } else {
            setError({ name: "", age: "", email: "", country: "", gender: "", language: "" })
            return true
        }
    }

    return (<>
        <img src={Logo} class="rounded mx-auto d-block" alt="LOGO" />
        <div className="row">
            <div className="col-8 lh-base">
                <Form>
                    <Row form>
                        <Name name={name} change={change} incr={incr} error={error.name} />
                        <Age age={age} change={change} incr={incr} error={error.age} />
                        <Email email={email} change={change} incr={incr} error={error.email} />
                        <Country country={country} change={change} incr={incr} error={error.country} />
                        <Gender gender={gender} change={change} incr={incr} error={error.gender} />
                        <Language language={language} change={selectLanguage} incr={incr} error={error.language} />
                        {/* <Photo photo={photo} /> */}
                    </Row>
                </Form>
            </div>
            <Card val={inputValue} />
        </div>

        <Progress percent={per} status="active" />

        <Context.Provider value={{ name: inputValue.name }}>
            {contextHolder}
            <Submit setSubmit={submit} />
        </Context.Provider>

        <div className="row  justify-content-md-center bs-example" align="center">
            <div className="col col-lg-3">
                <input class="form-control" type="search" id="search" onChange={search} placeholder="Search your name....." />
            </div>
        </div><br />


        {dataStore.length === 0 ? <Empty style={{ textAlign: "center" }} /> : <table className="table table-hover" width="100%" align="center"><Thead /><Tbody dataStore={dataStore} Edit={Edit} confirm={Delete} /></table>}

    </>)
}
export default Clear;
