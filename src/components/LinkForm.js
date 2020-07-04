import React, { useState } from 'react'

const LinkForm = (props) => {

    const inizialiceStateValues = {
        url: '',
        name: '',
        description: ''
    };

    const [values, setValues] = useState(inizialiceStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addOrEditLink(values)
        setValues({...inizialiceStateValues})
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Write some URl"
                    name="url"
                    onChange={handleInputChange}
                    value={values.url} />
            </div>


            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input type="text"
                    className="form-control"
                    name="name"
                    placeholder="Website name"
                    onChange={handleInputChange}
                    value={values.name} />
            </div>

            <div className="form-group">
                <textarea name="description"
                    rows="3"
                    className="form-control"
                    placeholder="Write a description"
                    onChange={handleInputChange}
                    value={values.description}
                ></textarea>
            </div>

            <button className="btn btn-primary btn-block">
                Save
            </button>

        </form>
    )
}

export default LinkForm;