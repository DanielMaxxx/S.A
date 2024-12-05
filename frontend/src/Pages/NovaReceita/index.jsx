import React, { useState } from 'react';
import './NovaReceita.css'; // Certifique-se de criar um arquivo CSS correspondente
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';

const NovaReceita = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    const [session, setSession] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [timeUnit, setTimeUnit] = useState('minutos');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = () => {
        setSelectedImage(null); // Remove a imagem selecionada
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio de dados
    };

    return (
        <div className='DivGeral'>
            <Header/>
            <Navbar/>

            <div className="recipe-form-container">
                <h1>Envie sua receita</h1>
                <form onSubmit={handleSubmit} className="recipe-form">
                    <div className="image-section">
                        <div className="image-placeholder">
                            {selectedImage ? (
                                <img src={selectedImage} alt="Imagem selecionada" className="selected-image" />
                            ) : (
                                '?'
                            )}
                        </div>
                        <input
                            type="file"
                            id="imageInput"
                            style={{ display: 'none' }}
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <button
                            type="button"
                            className="choose-image-button"
                            onClick={() => document.getElementById('imageInput').click()}
                        >
                            Escolher uma imagem
                        </button>
                        {selectedImage && (
                            <button type="button" className="remove-image-button" onClick={handleImageRemove}>
                                Excluir imagem
                            </button>
                        )}
                    </div>

                    <div className="text-section">
                        <label htmlFor="title">Título da receita *</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Título da receita"
                            required
                        />

                        <label htmlFor="description">Apresentação</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição da receita"
                        ></textarea>
                    </div>

                    <div className="info-section">
                        <div className="info-group">
                            <h3>Informações</h3>
                            <div className="session-options">
                                <label>
                                    <input
                                        type="radio"
                                        name="session"
                                        value="Doce"
                                        checked={session === 'Doce'}
                                        onChange={(e) => setSession(e.target.value)}
                                    />
                                    Doce
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="session"
                                        value="Salgado"
                                        checked={session === 'Salgado'}
                                        onChange={(e) => setSession(e.target.value)}
                                    />
                                    Salgado
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="session"
                                        value="Sem Glúten"
                                        checked={session === 'Sem Glúten'}
                                        onChange={(e) => setSession(e.target.value)}
                                    />
                                    Sem Glúten
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="session"
                                        value="Sem Lactose"
                                        checked={session === 'Sem Lactose'}
                                        onChange={(e) => setSession(e.target.value)}
                                    />
                                    Sem Lactose
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="session"
                                        value="Sem Açúcar"
                                        checked={session === 'Sem Açúcar'}
                                        onChange={(e) => setSession(e.target.value)}
                                    />
                                    Sem Açúcar
                                </label>
                            </div>

                            <div className="time-input">
                                <label htmlFor="preparationTime">Tempo de preparo *</label>
                                <input
                                    type="number"
                                    id="preparationTime"
                                    value={preparationTime}
                                    onChange={(e) => setPreparationTime(e.target.value)}
                                />
                                <select
                                    value={timeUnit}
                                    onChange={(e) => setTimeUnit(e.target.value)}
                                >
                                    <option value="minutos">Minutos</option>
                                    <option value="horas">Horas</option>
                                </select>
                            </div>
                        </div>

                        <div className="ingredients-section">
                            <label htmlFor="ingredients">Ingredientes *</label>
                            <textarea
                                id="ingredients"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                placeholder="Insira um ingrediente por linha"
                                required
                            ></textarea>
                        </div>
                    </div>

                    <div className="preparation-section">
                        <label htmlFor="preparation">Preparo</label>
                        <textarea
                            id="preparation"
                            value={preparation}
                            onChange={(e) => setPreparation(e.target.value)}
                            placeholder="Descreva aqui o preparo"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">Enviar receita</button>
                </form>
            </div>
        </div>
    );
};

export default NovaReceita;




