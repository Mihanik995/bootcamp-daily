import {useState} from 'react'
import './App.css'

function App() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        nutsFree: false,
        lactoseFree: false,
        veganMeal: false,
        submitted: false,
    })

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                setData({...data, submitted: true})
            }}>
                <div>
                    <input type='text' placeholder='First Name'
                           onChange={(e) => setData({...data, firstName: e.target.value})}/>
                </div>
                <div>
                    <input type='text' placeholder='last Name'
                           onChange={(e) => setData({...data, lastName: e.target.value})}/>
                </div>
                <div>
                    <input type='number' placeholder='Age'
                           onChange={(e) => setData({...data, age: e.target.value})}/>
                </div>
                <div>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={data.gender === 'male'}
                        onChange={(e) => setData({...data, gender: e.target.value})}
                    />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={data.gender === 'female'}
                        onChange={(e) => setData({...data, gender: e.target.value})}
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <div>
                    <select onChange={(e) => setData({...data, destination: e.target.value})}>
                        <option value=''>-- Please choose a destination --</option>
                        {['Asia', 'North America', 'South America', 'Europe', 'Africa'].map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <h4>Dietary restrictions:</h4>
                <div>
                    <label>
                        <input type='checkbox'
                               checked={data.nutsFree}
                               onChange={(e) => setData({...data, nutsFree: e.target.checked})}/>
                        Nuts free
                    </label>
                </div>
                <div>
                    <label>
                        <input type='checkbox'
                               checked={data.lactoseFree}
                               onChange={(e) => setData({...data, lactoseFree: e.target.checked})}/>
                        Lactose free
                    </label>
                </div>
                <div>
                    <label>
                        <input type='checkbox'
                               checked={data.veganMeal}
                               onChange={(e) => setData({...data, veganMeal: e.target.checked})}/>
                        Vegan meal
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
            <hr/>
            {!!data.submitted && <div>
                <h2>Entered information:</h2>
                <p>Your name: {data.firstName} {data.lastName}</p>
                {!!data.age && <p>Your age: {data.age}</p>}
                {!!data.gender && <p>Your gender: {data.gender}</p>}
                {!!data.destination && <p>Your destination: {data.destination}</p>}
                <ul>Your dietary restrictions:
                    <li>Nuts free: {data.nutsFree.toString()}</li>
                    <li>Lactose free: {data.lactoseFree.toString()}</li>
                    <li>Vegan meal: {data.veganMeal.toString()}</li>
                </ul>
            </div>}
        </>
    )
}

export default App
