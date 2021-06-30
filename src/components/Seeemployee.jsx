import { Link } from 'react-router-dom'
import './styles/seeemployee.css'
export default function Seeemployee () {

    let employees = window.sessionStorage.getItem("employee")
    employees = JSON.parse(employees)
    let arr = []
    for (let el in employees) {
        arr.push(employees[el])
    }
    return (
        <div className="main-page">
            <div className="header">
                <Link to="/">
                    <p>{'<'}</p>
                </Link>
                <p>Mes employés</p>
            </div>
            <div className="section">
                { employees === null ? <p>Aucun employé enregistrer</p> : null }
                { arr.map(employe => {
                    return (
                        <div className="employee-card">
                            <div class="modify">
                                <h2>{employe.prenom} {employe.nom}</h2>
                                <div className="setting">Modifier</div>
                            </div>
                            <div className="sub-section">
                                <p>Téléphone :</p>
                                <p>{employe.telephone}</p>
                            </div>
                            <div className="sub-section">
                                <p>Adresse email :</p>
                                <p>{employe.email}</p>
                            </div>
                            <div className="sub-section sub-section-last">
                                <p>Rôle :</p>
                                <p>{employe.role}</p>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}