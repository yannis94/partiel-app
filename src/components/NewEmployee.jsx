import { Link } from 'react-router-dom'
import { useState } from 'react'
import './styles/newemployee.css'

export default function NewEmployee() {

    const [error, setError] = useState(false)

    function handleClick() {
        let inputs = document.querySelectorAll(".form input")
        let obj = {}
        inputs.forEach(input => {
            if (input.dataset.info !== "role") {
                if (input.value !== "") {
                    input.classList.remove("error")
                    obj[input.dataset.info] = input.value
                }
                else {
                    setError(true)
                    input.classList.add("error")
                    return
                }
            }
            else {
                if (input.checked) {
                    obj[input.dataset.info] = input.dataset.role
                }
            }
        })
        let employeList = window.sessionStorage.getItem("employee")
        let employeObj = employeList === null ? {} : JSON.parse(employeList)
        employeObj[`employe-${Date.now()}`] = obj
        let result = JSON.stringify(employeObj)
        window.sessionStorage.setItem("employee", result)
        console.log(error)
        if (!error) {
            setTimeout(() => {
                window.location.href = "/seeemployee"
            }, 1000);
        }
    }

    return (
        <div className="main-page create-employe">
            <div className="header">
                <Link to="/">
                    <p>{'<'}</p>
                </Link>
                <p>Création d'un nouvel employé</p>
            </div>
            <div className="section">
                <h2>Nouvel employé</h2>
                <div className="form">
                    {error ? <p className="error-message">Un ou plusieurs champs son incomplet</p> : null}
                    <div className="form-top">
                        <input type="text" data-info="nom" placeholder="Nom *" />
                        <input type="text" data-info="prenom" placeholder="Prénom *" />
                        <input type="tel" data-info="telephone" placeholder="Téléphone *" />
                        <input type="email" data-info="email" placeholder="Adresse email *" />
                    </div>
                    <div className="choose-role">
                        <p>
                            Vous pouvez définir les droits de modification de vos employées et ainsi
                            autoriser qui peut modifier quoi.
                        </p>
                        <div className="role-selection">
                            <input htmlFor="limited" type="radio" data-role="panier" data-info="role" />
                            <label htmlFor="limited">Ajout de panier</label>
                        </div>
                        <div className="role-selection">
                            <input htmlFor="limited" type="radio" data-role="modification" data-info="role" />
                            <label htmlFor="limited">Modification des informations sur l'établissement</label>
                        </div>
                        <div className="role-selection">
                            <input htmlFor="full" type="radio" data-role="admin" data-info="role" />
                            <label htmlFor="full">Administrateur</label>
                        </div>
                    </div>
                    <div className="form-btn" onClick={handleClick}>Créer</div>
                </div>
            </div>
        </div>
    )
}