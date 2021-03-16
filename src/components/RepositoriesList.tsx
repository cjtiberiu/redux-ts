import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {

    const { searchRepositories } = useActions();
    const repositories = useTypedSelector(state => state.repositories);
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchRepositories(searchTerm);
    };

    useEffect(() => {
        console.log(repositories);
    }, [repositories])

    return (
        <div>
            <form onSubmit={onSubmit} style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input 
                    className='search-input'
                    type='text' 
                    onChange={e => setSearchTerm(e.target.value)} 
                    placeholder='search here'
                />
                
                <button type='submit' className="search-button" style={{ verticalAlign: 'top', outline: 'none'}}>Search</button>
            </form>
            {repositories.error && <h5 style={{ color: 'red'}}>{repositories.error}</h5>}
            {repositories.loading && <div className="spinner-grow mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                {
                    !repositories.error && !repositories.loading && 
                        repositories.data.map((repo: { name: string, link: string }) => {
                            return <div 
                            key={repo.name} 
                            onClick={() => window.open(repo.link, "_blank")}
                            style={{ cursor: 'pointer', marginTop: '5px'}}
                            >
                                {repo.name}
                            </div>
                        })
                }
            </div>
        </div>
    )
};

export default RepositoriesList;