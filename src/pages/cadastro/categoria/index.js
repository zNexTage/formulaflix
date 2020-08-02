import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
    const initialValues = {
        name: '',
        description: '',
        color: ''
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialValues);

    const setValue = (key, value) => {
        setValues({
            ...values,
            [key]: value
        });
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        setCategories([
            ...categories,
            values
        ]);

        setValues(initialValues)
    }

    const handlerField = (e) => {
        const key = e.target.getAttribute('name')
        const value = e.target.value;

        setValue(
            key,
            value
        )
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.name}</h1>

            <form onSubmit={handlerSubmit}>
                <FormField
                    type="text"
                    name="name"
                    label="Nome da Categoria"
                    onChange={handlerField}
                    value={values.name} />
                <FormField
                    type="textarea"
                    label="Descrição"
                    name="description"
                    onChange={handlerField}
                    value={values.description} />
               <FormField
                    type="color"
                    label="Cor"
                    name="color"
                    onChange={handlerField}
                    value={values.color} />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categories.map((cat, index) => (<li key={index}>{cat.name}</li>))}
            </ul>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;