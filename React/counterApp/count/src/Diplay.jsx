import './index.css'

export default function Display({counter}){
    return(
        <>

<h1 className='bg-white p-4 rounded-xl text-black  shadow-md shadow-black'> Counter value:{counter}</h1>
<br></br>
        </>
    )
}