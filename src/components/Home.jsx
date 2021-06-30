import { Link } from 'react-router-dom'
import './styles/home.css'

export default function Home() {
    return (
        <div className="main-page">
            <div className="header">
                <p>Mon profil</p>
            </div>
            <div>
                <div className="section">
                    <h2>Détails de mon compte</h2>
                    <div className="sub-section">
                        <p>Nom</p>
                        <div className="sub-section-right">
                            <p>Mr Doe</p>
                            <div className="sub-section-arrow"></div>
                        </div>
                    </div>
                    <div className="sub-section">
                        <p>Email</p>
                        <div className="sub-section-right">
                            <p>johndoe@mail.com</p>
                            <div className="sub-section-arrow"></div>
                        </div>
                    </div>
                    <div className="sub-section">
                        <p>Telephone</p>
                        <div className="sub-section-right">
                            <p>0606060606</p>
                            <div className="sub-section-arrow"></div>
                        </div>
                    </div>
                    <div className="sub-section sub-section-last">
                        <p>Pays</p>
                        <div className="sub-section-right">
                            <p>France</p>
                            <div className="sub-section-arrow"></div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2>Paramètres</h2>
                    <div className="sub-section">
                        <p>Notifications</p>
                        <div className="sub-section-right">
                            <div className="sub-section-arrow"></div>
                        </div>
                    </div>
                    <div className="sub-section">
                        <p>Changer le mot de passe</p>
                        <div className="sub-section-right">
                            <div className="sub-section-arrow"></div>
                        </div>
                    </div>
                    <div className="sub-section">
                        <p>Commerces cachés</p>
                        <div className="sub-section-right">
                            <div className="sub-section-arrow"></div>
                        </div>
                    </div>
                    <div className="sub-section sub-section-last">
                        <p>Confidentialité & autorisations</p>
                        <div className="sub-section-right">
                            <div className="sub-section-arrow"></div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2>Gérer mes employés</h2>
                    <Link to="/seeemployee">
                        <div className="sub-section">
                            <p>Mes employés</p>
                            <div className="sub-section-right">
                                <div className="sub-section-arrow"></div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/newemployee">
                        <div className="sub-section sub-section-last">
                                <p>Ajouter un employé</p>
                                <div className="sub-section-right">
                                    <div className="sub-section-arrow"></div>
                                </div>
                        </div>
                    </Link>
                </div>
                <div className="section">
                    <div className="sub-section sub-section-last">
                        <p className="deconnection">Se déconnecter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}