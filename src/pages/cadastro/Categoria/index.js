import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    };

    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
      setValues({
        ...values,
        [key]: value
      })
    }

    function handlerChange(event) {
      const { value } = event.target;
      const name = event.target.getAttribute('name');
      setValue(
        name, 
        value
      );
    }

    return (
      <PageDefault>

        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais);
        }}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handlerChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handlerChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handlerChange}
          />

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, index) => {
            return(
              <li key={`${categoria}-${index}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Ir para a home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;