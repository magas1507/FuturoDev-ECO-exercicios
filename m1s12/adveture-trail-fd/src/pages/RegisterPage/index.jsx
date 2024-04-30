import "./styles.css";

import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { TrilhasContext } from "../../context/TrilhasContext";
import { useContext } from "react";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
   } = useForm();

   const { addTrail } = useContext(TrilhasContext);

   function sendForm(handleSubmit) {
    console.log(handleSubmit);
    addTrail({
      ...handleSubmit,
      duracao: Number(handleSubmit.duracao),
      trajeto: Number(handleSubmit.trajeto),
    });
  }
   
  return (
    <div className="container">
      <h1>Cadastro de Nova Trilha</h1>
      <form onSubmit={handleSubmit(sendForm)}>
        <div className="form-group">
          <label htmlFor="nome-trilha">Nome da Trilha:</label>
          <input 
            type="text" 
            id="nome-trilha" 
            name="nome-trilha" 
            {...register("nomeTrilha", { required: true, maxLength: 100 })}

            />
            {errors.nomeTrilha && <span>O nome da trilha é obrigatório (limite de 100 caracteres).</span>}
        </div>
        <div className="form-group--grid">
          <div className="form-group-duration">
            <label htmlFor="duracao">Duração Estimada (min):</label>
            <input type="number" id="duracao" name="duracao" {...register("duracao", { required: true, maxLength: 4 })}/>
            {errors.duracao && <span>A duração estimada é obrigatória (limite de 4 caracteres).</span>}
          </div>
          <div className="form-group-km">
            <label htmlFor="trajeto">Trajeto (km):</label>
            <input type="number" id="trajeto" name="trajeto" {...register("trajeto", { required: true, maxLength: 5 })} />
            {errors.trajeto && <span>O trajeto é obrigatório (limite de 5 caracteres).</span>}
          </div>
          <div className="form-group-city">
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" {...register("cidade", { required: true, maxLength: 60 })}/>
            {errors.cidade && <span>A cidade é obrigatória (limite de 60 caracteres).</span>}
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" {...register("estado", { required: true, maxLength: 2 })}/>
            {errors.estado && <span>O estado é obrigatório (limite de 2 caracteres).</span>}
          </div>
          <div className="form-group">
            <label htmlFor="nome-usuario">Nome Completo do Usuário:</label>
            <input type="text" id="nome-usuario" name="nome-usuario" {...register("nomeUsuario", { maxLength: 60 })}/>
            {errors.nomeUsuario && <span>O nome completo do usuário excedeu o limite de 60 caracteres.</span>}
          </div>

          <div className="form-group">
            <label htmlFor="dificuldade">Dificuldade:</label>
            <select id="dificuldade" name="dificuldade" {...register("dificuldade", { required: true })}>
              <option value="facil">Fácil</option>
              <option value="medio">Médio</option>
              <option value="dificil">Difícil</option>
            </select>
            {errors.dificuldade && <span>A dificuldade da trilha é obrigatória.</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="tipo-trilha">Tipo de Trilha:</label>
          <select id="tipo-trilha" name="tipo-trilha" {...register("tipoTrilha", { required: true })}>
            <option value="caminhada">Caminhada</option>
            <option value="ciclismo">Ciclismo</option>
            <option value="corrida">Corrida</option>
          </select>
          {errors.tipoTrilha && <span>O tipo de trilha é obrigatório.</span>}
        </div>
        <div className="form-group">
          <label htmlFor="url-imagem">URL Imagem da Trilha:</label>
          <input type="text" id="url-imagem" name="url-imagem" {...register("urlImagem", { maxLength: 300 })} />
          {errors.urlImagem && <span>A URL da imagem da trilha excedeu o limite de 300 caracteres.</span>}
        </div>
        <div className="form-group--buttons">
          <button type="submit">Cadastrar</button>
          <button className="button--go-back">
            <Link to="/">Voltar</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
