import {useState} from 'react'
import './App.css'

function App() {
    const languages = ['PHP', 'Python', 'JavaScript', 'Java']
        .map(language => {
            const [votes, setVotes] = useState(0)
            return {name: language, votes, setVotes}
        })

    console.log(languages)

    return (
        <div>
            {languages.map((language) => (
                <div key={language.name}>
                    <button onClick={() => language.setVotes(language.votes + 1)}
                            style={{
                                backgroundColor: 'yellow',
                                border: '1px solid black',
                                padding: '10px',
                                color: 'black',
                            }}>
                        <table>
                            <tbody>
                            <tr>
                                <td>{language.votes}</td>
                                <td>{language.name}</td>
                                <td>CLICK HERE!</td>
                            </tr>
                            </tbody>
                        </table>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default App
