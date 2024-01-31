import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [nomeUsuario])

    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(repoitorio => (
                    <li className={styles.listItem} key={repoitorio.id}>
                        <div className={styles.itemName}>
                            <b>Nome: </b> {repoitorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b> {repoitorio.language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={repoitorio.html_url}>Visitar no Github</a>
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default ReposList